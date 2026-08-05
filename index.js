(function () {
	const api = window.SubwayBuilderAPI;
	const TAG = "[vehicles-of-czechia]";

		const TYPES = [
		{
			id: "prague_metro",
			name: "Metro Prague M1",
			description:
				"A modern metro train running in Prague, currently on line C only",
			stats: {
				maxAcceleration: 1.2,
				maxDeceleration: 1.2,
				maxSpeed: 22.22,
				maxSpeedLocalStation: 11.11,
				capacityPerCar: 292.8,
				carLength: 19,
				minCars: 5,
				maxCars: 5,
				carsPerCarSet: 5,
				carCost: 2000000,
				trainWidth: 2.7,
				minStationLength: 100,
				maxStationLength: 100,
				baseTrackCost: 30000,
				baseStationCost: 62000000,
				trainOperationalCostPerHour: 240,
				carOperationalCostPerHour: 24,
				stopTimeSeconds: 30,
				parallelTrackSpacing: 3.7,
				trackClearance: 1,
				maxLateralAcceleration: 1,
				minTurnRadius: 70,
				minStationTurnRadius: 1000,
				maxSlopePercentage: 4,
				trackMaintenanceCostPerMeter: 180,
				stationMaintenanceCostPerYear: 160000,
				tphLimit: 30,
				crossoverSpeed: 11.11,
			},
			compatibleTrackTypes: ["prague-metro"],
			appearance: { color: "#0065bd" },
			elevationMultipliers: {
				DEEP_BORE: 3,
				STANDARD_TUNNEL: 1.5,
				CUT_AND_COVER: 0.9,
				TRENCHED: 0.5,
				AT_GRADE: 0.35,
				RAMP: 0.5,
				ELEVATED: 2,
			},
			allowGradeCrossing: false,
			portalCost: 15000000,
			rampCost: 5000000,
			maxOverpassSpan: 65
		},
		{
			id: "tramvaj",
			name: "Tram (based on KT8D5)",
			description:
				"Classic tram made in CKD modernised into partially low floor bidirectional vehicle",
                	stats: {
				maxAcceleration: 1.8,
				maxDeceleration: 1.8,
				maxSpeed: 18.06,
				maxSpeedLocalStation: 10,
				capacityPerCar: 108,
				carLength: 10.5,
				minCars: 3,
				maxCars: 3,
				carsPerCarSet: 3,
				carCost: 333333,
				trainWidth: 2.5,
				minStationLength: 32,
				maxStationLength: 75,
				baseTrackCost: 3000,
				baseStationCost: 10000,
				trainOperationalCostPerHour: 75,
				carOperationalCostPerHour: 7.5,
				stopTimeSeconds: 60,
				parallelTrackSpacing: 3,
				trackClearance: 1,
				maxLateralAcceleration: 1,
				minTurnRadius: 15,
				minStationTurnRadius: 300,
				maxSlopePercentage: 8,
				trackMaintenanceCostPerMeter: 40,
				stationMaintenanceCostPerYear: 1600,
				tphLimit: 120,
				crossoverSpeed: 5,
			},
			compatibleTrackTypes: ["tramvaj"],
			appearance: { color: "#63b1e5" },
			allowGradeCrossing: false, ///build it elevated since we cannot put stops onto roads
			portalCost: 1500000,
			rampCost: 500000,
			maxOverpassSpan: 65,
		},
		{
			id: "vlak",
			name: "Train",
			description:
				"Modelled after JMK class 530",
			stats: {
				maxAcceleration: 1.0,
				maxDeceleration: 0.5,
				maxSpeed: 44.44,
				maxSpeedLocalStation: 22.22,
				capacityPerCar: 84,
				carLength: 26.45,
				minCars: 4,
				maxCars: 8,
				carsPerCarSet: 4,
				carCost: 2100000,
				trainWidth: 3,
				minStationLength: 130,
				maxStationLength: 260,
                baseTrackCost: 46750,
				baseStationCost: 63750000,
				trainOperationalCostPerHour: 420,
				carOperationalCostPerHour: 42,
				scissorsCrossoverCost: 12750000,
				stopTimeSeconds: 60,
				parallelTrackSpacing: 3.808,
				trackClearance: 1.86,
				maxLateralAcceleration: 1.68,
				minTurnRadius: 175,
				minStationTurnRadius: 1000,
				maxSlopePercentage: 3.5,
				trackMaintenanceCostPerMeter: 200,
				stationMaintenanceCostPerYear: 50000,
				tphLimit: 20,
				crossoverSpeed: 6.7,
			},
			compatibleTrackTypes: ["vlak"],
			appearance: { color: "#e30613" },
			elevationMultipliers: {
				DEEP_BORE: 6.01,
				STANDARD_TUNNEL: 2.67,
				CUT_AND_COVER: 1.41,
				AT_GRADE: 0.3,
				ELEVATED: 0.8,
			},
			allowAtGradeRoadCrossing: false,
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,
			gradeCrossingMaintenancePerDay: 5000,
			gradeCrossingTphLimit: { highway: 20, major: 20, medium: 20, minor: 20 },
			portalCost: 15000000,
			rampCost: 5000000,
			maxOverpassSpan: 50,
		}
	];

	let registered = 0;
	for (const type of TYPES) {
		try {
			api.trains.registerTrainType(type);
			registered++;
			console.log(`${TAG} Registered train type: ${type.id}`);
		} catch (err) {
			console.error(`${TAG} Failed to register ${type.id}:`, err);
			api.ui.showNotification(`${TAG} error ${type.id}`, "error");
		}
	}
	console.log(`${TAG} ${registered}/${TYPES.length} train types registered.`);
})();
