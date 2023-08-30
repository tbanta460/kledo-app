import { useQuery } from "react-query";
import { useAxios, mainUrl } from "../useApi";
const useShippingList = (
    {name}
) => {
  const instance = useAxios()
  
  return useQuery(["companyList", {name}],() => {
    return instance.get(mainUrl + `/finance/shippingComps?search=${name ?? ""}`)
    .then((res) => res.data)
    .catch((error) => error)
  }, {staleTime: Infinity});
};

export default useShippingList;