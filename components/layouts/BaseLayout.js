import SocialBar from '../shared/SocialBar';
import Footer from '../shared/Footer';

const BaseLayout = (props) => {

    return (
        <div>
            <div className="base">
                <div className="base_left">
                    <div className="text-right padding32 font-xl x-bold white uppercase title">{props.title}</div>
                    <SocialBar />
                </div>
                <div className="base_right">
                    <div className="dt_hide tb_hide uppercase top64 text-center bold font-xl default">{props.title}</div>
                    <div className="height100vh">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default BaseLayout