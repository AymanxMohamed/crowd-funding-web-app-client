import {MEDIA_URL} from "../../../app/config";

const imageLink =  (src,defaultImage="default.jpg") => {

    return MEDIA_URL + (src ? src.substring(src.lastIndexOf('/')+1): defaultImage);
}
export default imageLink;
