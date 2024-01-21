
import developers from "./developers";


function submitForm(){
    const currentSkills = document.getElementById("currentSkills");
    const desiredSkills = document.getElementById("desiredSkills");
    const availability = document.getElementById("availability");

    if(!currentSkills || !desiredSkills |!availability){
        const error = createElement(<p>All fields have to be completed</p>);
        const notice = document.getElementById("notice");
        notice.append(error);

    }


}