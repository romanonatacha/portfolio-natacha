import '../../styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const BaseLayout = (props) => {

    return (
        <div>
            <div className="base">
                <div className="base_left">
                    <div className="text-right padding32 font-xl x-bold white uppercase">{props.title}</div>
                </div>
                <div className="base_right">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout