import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationList } from "./Locations/LocationList";
import { LocationProvider } from "./Locations/LocationProvider";

export const ApplicationViews = () => (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

        {/* Render the locations list when http://localhost:3000/locations */}
      <LocationProvider>
        <Route exact path="/Locations">
          <LocationList />
        </Route>
      </LocationProvider>

    </>
)
