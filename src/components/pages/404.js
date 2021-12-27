import { Link } from "react-router-dom";

const  Page404 = () => {
    return (
        <div>
            <img  style={{'display': 'block' ,'margin': '0 auto', 'width': '600px'}} src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="error" />
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to='/' >Back to Main page</Link>
        </div>
    )
}

export default Page404;