import React, { memo } from 'react'
import { Route } from 'react-router-dom'

const PermissionRoute = (props: any) => {
  const { component: Component, permission, name, ...rest } = props
  return (
    <Route
      {...rest}
      render={(propsRoute) => {
          return (
            Component && (
              <>
                <div>
                  <Component {...propsRoute} />
                </div>
              </>
            )
          )  
      }}
    />
  )
}

export default memo(PermissionRoute)
