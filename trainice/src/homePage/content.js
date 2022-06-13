import contenLeft from './image/conten-1-left.svg'
function Content() {
    return (
        <div>
            <div class="row border">
                <div class="col">
                    <img src={contenLeft} />
                </div>
                <div class="col border">
                    2 of 2
                </div>
            </div>
        </div>
    )
}

export default Content