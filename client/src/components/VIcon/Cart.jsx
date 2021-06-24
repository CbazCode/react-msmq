import * as React from 'react'

function Cart (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 13 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.705 6.994a1.203 1.203 0 01-1.058.623H5.142l-.665 1.21h7.256v1.209H4.477c-.919 0-1.499-.986-1.058-1.796l.817-1.475-2.177-4.59H.849V.967h1.978l.568 1.21h8.948c.46 0 .75.495.526.894l-2.164 3.924zm.61-3.61H3.97l1.433 3.024h4.245l1.668-3.023zM4.477 10.64c-.665 0-1.203.544-1.203 1.21 0 .664.538 1.208 1.203 1.208s1.21-.544 1.21-1.209-.545-1.209-1.21-1.209zm4.843 1.21c0-.666.538-1.21 1.203-1.21s1.21.544 1.21 1.21c0 .664-.545 1.208-1.21 1.208A1.208 1.208 0 019.32 11.85z'
        fill={props.color}
      />
    </svg>
  )
}

export default Cart