const ShopLogo = (props) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="shop-svgrepo-com 1">
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M295.478 7.73099H216.522L182.741 122.419H329.259L295.478 7.73099Z"
              fill={
                props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue
              }
            />
          </g>
        </g>
        <g id="Group_3">
          <g id="Group_4">
            <path
              id="Vector_2"
              d="M445.666 19.31C441.762 12.171 434.273 7.73099 426.137 7.73099H335.26L369.039 122.419H502.065L445.666 19.31Z"
              fill={
                props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue
              }
            />
          </g>
        </g>
        <g id="Group_5">
          <g id="Group_6">
            <path
              id="Vector_3"
              d="M432.495 238.493C402.737 238.493 376.728 222.211 362.857 198.099C356.589 208.997 348.648 218.983 339.181 227.649C316.419 248.485 286.876 259.959 256 259.959C225.124 259.959 195.581 248.485 172.819 227.649C163.352 218.983 155.413 208.998 149.143 198.099C135.271 222.211 109.263 238.493 79.505 238.493C39.022 238.493 5.459 208.374 0 169.371V482.007C0 494.301 9.966 504.268 22.261 504.268H176.08V362.803C176.08 349.631 186.759 338.952 199.931 338.952H312.067C325.239 338.952 335.918 349.631 335.918 362.803V504.269H489.739C502.033 504.269 512 494.303 512 482.008V169.372C506.541 208.374 472.978 238.493 432.495 238.493Z"
              fill={
                props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue
              }
            />
          </g>
        </g>
        <g id="Group_7">
          <g id="Group_8">
            <path
              id="Vector_4"
              d="M87.453 7.73099C79.401 7.73099 71.975 12.08 68.035 19.105L10.111 122.419H142.961L176.74 7.73099H87.453Z"
              fill={
                props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue
              }
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default ShopLogo;
