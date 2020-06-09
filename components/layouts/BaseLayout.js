import '../../styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import SocialBar from '../shared/SocialBar';

const BaseLayout = (props) => {

    return (
        <div>
            <div className="base">
                <div className="base_left">
                    <div className="text-right padding32 font-xl x-bold white uppercase title">{props.title}</div>
                    <SocialBar />
                </div>
                <div className="base_right">
                    <div className="dt_hide tb_hide uppercase top64 text-center bold font-xl">{props.title}</div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout