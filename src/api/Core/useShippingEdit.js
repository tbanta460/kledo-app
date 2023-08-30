import { useMutation } from "react-query";
import { useAxios, mainUrl } from "../useApi";
const useShippingEdit = ({id}) => {
  const instance = useAxios()
  return useMutation((params) => {
    return instance.put(mainUrl + "/finance/shippingComps/" + id, params)
    .then((res) => res.data)
    .catch((error) => error)
  }, {staleTime: Infinity});
};

export default useShippingEdit;