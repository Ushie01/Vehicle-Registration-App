import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Signin from './auth/signIn'
import Signup from './auth/signup';
import Dashboard from "./screens/Dashboard/dashboard";
import AdminDashboard from "./screens/Dashboard/adminDashbord";
import VehicleRegList from "./screens/Dashboard/vehicleRegList";
import DriverLensRegList from "./screens/Dashboard/driverLicRegList";
import VehicleRegistration from "./screens/Dashboard/vehicleReg";
import VehicleVerification from "./screens/Dashboard/vehicleVerification";
import DriverLensRegistration from "./screens/Dashboard/driverLenReg";
import PlateNoVerification from "./screens/Dashboard/plateNoVerification";
import DriverLensVerification from "./screens/Dashboard/driversLensVerification";

const App = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/Signin'
					element={<Signin />}
				/>
				<Route
					path='/Signup'
					element={<Signup />}
				/>
				<Route
					path='/Dashboard'
					element={<Dashboard />}>
					<Route
						index='vehicleRegistration'
						element={<VehicleRegistration/>}
					/>
					<Route
						path='vehicleRegistration'
						element={<VehicleRegistration/>}
					/>
					<Route
						path='driverLensRegistration'
						element={<DriverLensRegistration/>}
					/>
					<Route
						path='vehicleVerification'
						element={<VehicleVerification/>}
					/>
					<Route
						path='plateNoVerification'
						element={<PlateNoVerification/>}
					/>
					<Route
					    path="driverLensVerification"
						element={<DriverLensVerification/>}					
					/>
				</Route>
				<Route 
					path="/admin/Dashboard"
					element={<AdminDashboard/>}
			    >
					<Route
						index='vehicleRegList'
						element={<VehicleRegList/>}
					/>
					<Route
						path='vehicleRegList'
						element={<VehicleRegList/>}
					/>
					<Route
						path='driverLensRegList'
						element={<DriverLensRegList/>}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;