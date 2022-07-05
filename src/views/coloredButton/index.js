import {useState} from "react";
import {Button} from "../../components/button/button";
import {Checkbox} from "../../components/checkbox/checkbox";

export const ColoredButton = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false)
    return (
        <div>
            <Button disabled={buttonDisabled}/>
            <Checkbox clickHandler={() => setButtonDisabled(!buttonDisabled)}/>
        </div>
    )
}