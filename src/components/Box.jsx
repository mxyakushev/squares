export default function Box(props){
    const styles = {
        backgroundColor: props.on ? 'green' : 'crimson'
    }

    return (<div
        className="box"
        style={styles}
        key={props.id}
        onClick={() => props.toggle(props.id)}
    >

    </div>)
}
