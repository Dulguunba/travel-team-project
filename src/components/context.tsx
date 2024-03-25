import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { string } from "yup";

type TravelDataType = {
  name?: string;
  travelCompany?: string;
  duration?: number;
  adultPrice?: number;
  childPrice?: number;
  foodNumber?: number | undefined;
  foodPrice?: number | undefined;
  IsIncludeFoodCheck?: boolean | undefined;
  IsIncludeFoodPriceCheck?: boolean | undefined;
  trafficPrice?: number | undefined;
  IsIncludeTrafficCheck?: boolean | undefined;
  IsIncludeTrafficPriceCheck?: boolean | undefined;
};

type TravelContextType = {
  travelData: TravelDataType | null;
  setTravelData: Dispatch<SetStateAction<TravelDataType | null>>;
};
interface ContextFunctionProps {
  children: ReactNode;
}

export const TravelDataContext = createContext<TravelContextType>({
  travelData: null,
  setTravelData: () => {},
});

export const TravelDataContextFunction = ({
  children,
}: ContextFunctionProps) => {
  const [travelData, setTravelData] = useState<TravelDataType | null>(null);

  return (
    <TravelDataContext.Provider value={{ travelData, setTravelData }}>
      {children}
    </TravelDataContext.Provider>
  );
};
