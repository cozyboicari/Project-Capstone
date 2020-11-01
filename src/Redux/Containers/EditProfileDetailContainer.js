import { connect } from 'react-redux';

import { updateItemTourGuideAction } from '../Actions/index';
import EditProfileDetailComponent from '../../Components/Profile/EditProfileDetail';

const mapStateToProps = state => {
    return {
         
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onUpdateEditProfileDetail: itemsUpdate => {
            dispatch(updateItemTourGuideAction(itemsUpdate));
        }
    }
}

const EditProfileDetailContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfileDetailComponent);
export default EditProfileDetailContainer;