import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {"name":"hanna","mno":12345,"dnm":"dr.lalu","email":"lalu@g.com"},
            {"name":"ardra","mno":99345,"dnm":"dr.achu","email":"achu@g.com"},
            {"name":"suhan","mno":12399,"dnm":"dr.manu","email":"manu@g.com"},
            {"name":"akhi","mno":12885,"dnm":"dr.mina","email":"mina@g.com"},
            {"name":"adi","mno":13345,"dnm":"dr.linna","email":"linna@g.com"},
            {"name":"jinitha","mno":88845,"dnm":"dr.jithu","email":"jithu@g.com"},
            {"name":"sandra","mno":88845,"dnm":"dr.appu","email":"appu@g.com"}
        ]
    )
  return (
    <div>
        <NavBar></NavBar>
         <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table" border="1">
                    <thead>
                      <tr>
                        <th scope="col">patient name</th>
                        <th scope="col">mobile no</th>
                        <th scope="col">doctor name</th>
                        <th scope="col">email id</th>
                      </tr>
                    </thead>
                    
                    {data.map(
                        (value,index)=>
                            {
                                return <tbody>
                                <tr>
                                  <td>{value.name}</td>
                                  <td>{value.mno}</td>
                                  <td>{value.dnm}</td>
                                  <td>{value.email}</td>
                                </tr>
                                </tbody>
                            }
                    )}
                  </table>
            </div>
        </div>
    </div>

    </div>
  )
}
