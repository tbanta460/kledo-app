import { useMutation } from "react-query";
import { useAxios, mainUrl } from "../useApi";
const useShippingDelete = ({id}) => {
  const instance = useAxios()
  return useMutation((params) => {
    return instance.delete(mainUrl + "/finance/shippingComps/" + id, params)
    .then((res) => res.data)
    .catch((error) => error)
  }, {staleTime: Infinity});
};

export default useShippingDelete;