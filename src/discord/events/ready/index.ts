import startMessage from "./methods/startMessage";
import storeClients from "../../../firebase/methods/storeClients";

export default (): void => {
    startMessage();
    storeClients();
}