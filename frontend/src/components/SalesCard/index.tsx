import NotificationButton from '../NotificationButton';

import './styles.css'

function SalesCard() {
  return (
    <div className="ldszmeta-card">
            <h2 className="ldszmeta-sales-title">Sales</h2>
            <div>
              <div className="ldszmeta-form-control-container">
                <input className="ldszmeta-form-control" type="text"/>
              </div>
              <div className="ldszmeta-form-control-container">
                <input className="ldszmeta-form-control" type="text"/>
              </div>
            </div>

            <div>
              <table className="ldszmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Seller</th>
                    <th className="show992">Visits</th>
                    <th className="show992">Sales</th>
                    <th>Total</th>
                    <th>Notify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="ldszmeta-red-btn-container">
                        <NotificationButton/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="ldszmeta-red-btn-container">
                      <NotificationButton/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="ldszmeta-red-btn-container">
                      <NotificationButton/>
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
  )
}

export default SalesCard;