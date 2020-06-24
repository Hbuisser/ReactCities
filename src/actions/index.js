// TODO: add and export your own actions
import cities from '../components/app.jsx';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}
