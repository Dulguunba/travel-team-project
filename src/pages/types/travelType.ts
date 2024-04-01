export interface TravelType {
    result: [
        {
            price: {
                adultPrice: Number;
                childPrice: Number;
            }
            food: {
                IsIncludeFoodCheck: boolean;
                IsIncludeFoodPriceCheck: boolean;
                foodNumber: Number;
                foodPrice: Number;
            }
            traffic: {
                trafficPrice: Number,
                IsIncludeTrafficCheck: Boolean,
                IsIncludeTrafficPriceCheck: Boolean,
            }
            image: {
                mainImage: String,
                supportImage: String,
            },
            _id: Number,
            name: String,
            travelCompany: String,
            duration: Number,
            categoryType: [
                "66015407ee6ed08462463b6b",
                "66015412ee6ed08462463b6d",
                "66015413ee6ed08462463b6f"
            ];
            touristType: [];
            additionalInfo: String,
            route: [
                {
                    startPoint: String,
                    endPoint: String,
                    vehicle: String,
                    place: String,
                    activity: String,
                    sectionDuration: Number,
                    sectionImage: String,
                },
                {
                    startPoint: String,
                    endPoint: String,
                    vehicle: String,
                    place: String
                    activity: String,
                    sectionDuration: Number,
                    sectionImage: String
                }
            ],
            calendar: [],
            createdAt: Date,
            updatedAt: Date,
            __v: Number
        }
    ]
}