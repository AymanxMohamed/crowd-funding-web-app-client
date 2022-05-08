import {MEDIA_URL} from "../../../app/config";

const imageLink =  (src) => {

    return MEDIA_URL + (src ? src.substring(src.lastIndexOf('/')+1): "default");
}
export default imageLink;