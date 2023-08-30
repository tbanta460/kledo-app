import { useMutation } from "react-query";
import { useAxios, mainUrl } from "../useApi";
const useShippingAdd = () => {
  const instance = useAxios()
  return useMutation((params) => {
    return instance.post(mainUrl + "/finance/shippingComps", params)
    .then((res) => res.data)
    .catch((error) => error)
  }, {staleTime: Infinity});
};

export default useShippingAdd;