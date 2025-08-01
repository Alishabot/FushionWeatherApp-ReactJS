import { useState, useEffect } from "react";
import type { Coordinates } from "@/api/types";

interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isLoading: true,
  });

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));

    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geolocation is not supported by your browser",
        isLoading: false,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
        }

        setLocationData({
          coordinates: null,
          error: errorMessage,
          isLoading: false,
        });

        // Fallback to London coordinates if location fails
        setTimeout(() => {
          setLocationData({
            coordinates: {
              lat: 51.5074,
              lon: -0.1278,
            },
            error: `${errorMessage} Using London as fallback location.`,
            isLoading: false,
          });
        }, 1000);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000, // Increased timeout to 10 seconds
        maximumAge: 300000, // Cache location for 5 minutes
      }
    );
  };

  // Get location on component mount
  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...locationData,
    getLocation, // Expose method to manually refresh location
  };
}
