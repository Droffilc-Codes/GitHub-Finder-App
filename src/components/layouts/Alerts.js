import React, { useContext } from 'react'
import AlertContext from '../../Context/alert/alertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  const {alert} = alertContext
  
  return (
   alert !== null && (
    <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"/> {alert.msg}
    </div>
   )
  )
}

export default Alerts
