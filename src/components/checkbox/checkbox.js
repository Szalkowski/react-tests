export const Checkbox = (props) => {
    return (
        <div>
        <label htmlFor="checkbox">Check for disable
            <input type="checkbox" id={'checkbox'} onChange={props.clickHandler}/>
        </label>
        </div>
    )
}