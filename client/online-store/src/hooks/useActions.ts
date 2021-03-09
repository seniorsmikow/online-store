import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../store/action-creators'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionsCreators, dispatch)
}