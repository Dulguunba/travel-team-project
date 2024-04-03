export interface TravelType {
    result: {
        price: {
            adultPrice: number;
            childPrice: number;
        };
        food: {
            IsIncludeFoodCheck: boolean;
            IsIncludeFoodPriceCheck: boolean;
            foodNumber: number;
            foodPrice: number;
        };
        traffic: {
            trafficPrice: number;
            IsIncludeTrafficCheck: boolean;
            IsIncludeTrafficPriceCheck: boolean;
        };
        image: {
            mainImage: string;
            supportImage: string;
        };
        _id: number;
        name: string;
        travelCompany: string;
        duration: number;
        categoryType: string[];
        touristType: any[]; // Please update this type if possible
        additionalInfo: string;
        route: {
            startPoint: string;
            endPoint: string;
            vehicle: string;
            place: string;
            activity: string;
            sectionDuration: number;
            sectionImage: string;
        }[];
        calendar: any[]; // Please update this type if possible
        createdAt: Date;
        updatedAt: Date;
        __v: number;
    }[];
}