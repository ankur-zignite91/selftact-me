import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./EcardDesignComponent.css";

const EcardDesignComponent = () => {
  const [userDetails, setUserDetails] = useState({});

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const getUserDetails = (name) => {
    let config = {
      method: "get",
      url: `https://api.selftact.com/api/users/public/${name}`,
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.success) {
          setUserDetails(response?.data?.user);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    if (query.get('username')) {
      console.log(query.get('username'));
      getUserDetails(query.get('username'));
    } else {
      // window.location.replace("https://selftact.com/");
    }
  }, [query]);

  return (
    <Container>
      <div className="card">
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6}>
            <div className="card_main_center">
              {userDetails?.name ? (
                <>
                  <div className="profile_section">
                    <div
                      className="profile_picture"
                      style={{
                        backgroundImage: `url(${userDetails?.avatar})`,
                      }}
                    ></div>
                  </div>
                  <div className="introduction_Section">
                    <div className="name">{userDetails?.name}</div>
                    <div className="username">{userDetails?.username}</div>
                  </div>
                  <div className="social_media_links">
                    <Grid
                      container
                      spacing={2}
                      sx={{ justifyContent: "center" }}
                    >
                      {!userDetails?.email?.length > 0 && (
                        <Grid xs={4}>
                          <a href={`mailto:${userDetails?.email}`}>
                            <div className="button_with_link">
                              <svg
                                width="85"
                                height="85"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                              >
                                <g filter="url(#mail_color_svg__filter0_i)">
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="url(#mail_color_svg__mail)"
                                  ></path>
                                  <path
                                    d="M66.016 22h-51.59c-.468 0-.91.138-1.295.358l.551.552L36.816 46.07a4.826 4.826 0 006.81 0L67.34 22.386A2.474 2.474 0 0066.016 22zM68.47 24.454c0-.469-.138-.91-.359-1.296l-17.095 17.26 17.15 17.096c.193-.358.303-.772.303-1.185V24.454zM12 24.454c0-.469.138-.91.358-1.296l17.096 17.26-17.15 17.096A2.525 2.525 0 0112 56.33V24.454z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M50.107 41.218l-5.984 5.984c-2.15 2.15-5.68 2.15-7.83 0l-5.984-5.956-17.178 17.15c.386.221.8.36 1.268.36h51.59c.468 0 .91-.139 1.268-.36l-1.02-1.02-16.13-16.157z"
                                    fill="#fff"
                                  ></path>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="mail_color_svg__mail"
                                    x1="40"
                                    y1="0"
                                    x2="40"
                                    y2="80"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1E51EE"></stop>
                                    <stop
                                      offset="1"
                                      stop-color="#19E4FF"
                                    ></stop>
                                  </linearGradient>
                                  <filter
                                    id="mail_color_svg__filter0_i"
                                    x="0"
                                    y="-1"
                                    width="80"
                                    height="81"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    ></feBlend>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    ></feColorMatrix>
                                    <feOffset dy="-1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="arithmetic"
                                      k2="-1"
                                      k3="1"
                                    ></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                    <feBlend
                                      in2="shape"
                                      result="effect1_innerShadow"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                              <h6>Email</h6>
                            </div>
                          </a>
                        </Grid>
                      )}
                      {!userDetails?.call?.length > 0 && (
                        <Grid xs={4}>
                          <a href={`tel:${userDetails?.call}`}>
                            <div className="button_with_link">
                              <svg
                                width="85"
                                height="85"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                              >
                                <g filter="url(#phone_color_svg__filter0_i)">
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="url(#phone_color_svg__call)"
                                  ></path>
                                  <path
                                    d="M14.682 21.93c-.188-2.542.847-4.33 3.012-5.648.94-.564 1.882-1.223 2.823-1.788 1.694-1.035 3.294-.753 4.424.941 1.976 2.918 3.859 5.742 5.835 8.66 1.412 2.07 1.318 3.482-.282 5.364-.47.565-.942 1.13-1.318 1.694-1.318 1.694-1.412 3.2-.188 4.988 1.506 2.07 3.2 4.047 4.894 6.024 2.635 3.012 5.741 5.553 9.035 8 1.788 1.317 3.483 1.223 5.27.094.566-.377 1.224-.847 1.789-1.224 1.694-1.317 3.012-1.411 4.894-.282 2.918 1.882 5.93 3.67 8.847 5.553 2.165 1.318 2.541 2.73 1.412 4.988-.659 1.224-1.412 2.353-2.259 3.483-1.223 1.788-3.012 2.352-5.082 2.352-2.541.095-4.894-.564-7.153-1.505-6.306-2.542-11.859-6.306-16.847-10.824C27.67 47.341 22.4 41.13 18.447 33.882c-1.694-3.2-3.106-6.494-3.577-10.07-.094-.659-.094-1.318-.188-1.883z"
                                    fill="#fff"
                                  ></path>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="phone_color_svg__call"
                                    x1="40"
                                    y1="0"
                                    x2="40"
                                    y2="80"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#8BFB6B"></stop>
                                    <stop
                                      offset="1"
                                      stop-color="#19DB1C"
                                    ></stop>
                                  </linearGradient>
                                  <filter
                                    id="phone_color_svg__filter0_i"
                                    x="0"
                                    y="-1"
                                    width="80"
                                    height="81"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    ></feBlend>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    ></feColorMatrix>
                                    <feOffset dy="-1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="arithmetic"
                                      k2="-1"
                                      k3="1"
                                    ></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                    <feBlend
                                      in2="shape"
                                      result="effect1_innerShadow"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                              <h6>Call</h6>
                            </div>
                          </a>
                        </Grid>
                      )}
                      {!userDetails?.socialMediaHandles?.facebook?.length >
                        0 && (
                        <Grid xs={4}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.${userDetails?.socialMediaHandles?.facebook}`}
                          >
                            <div className="button_with_link">
                              <svg
                                width="85"
                                height="85"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                              >
                                <g
                                  clip-path="url(#facebook_color_svg__facebook0clip)"
                                  filter="url(#facebook_color_svg__facebook0_i)"
                                >
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="url(#facebook_color_svg__facebook0_linear)"
                                  ></path>
                                  <path
                                    d="M55.924 51.531l1.797-11.734H46.482v-7.615c0-3.21 1.57-6.34 6.604-6.34h5.11v-9.99s-4.637-.793-9.071-.793c-9.257 0-15.306 5.62-15.306 15.794v8.944h-10.29V51.53h10.29v28.86l6.331.001h6.332v-28.86h9.442z"
                                    fill="#fff"
                                  ></path>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="facebook_color_svg__facebook0_linear"
                                    x1="40"
                                    y1="0"
                                    x2="40"
                                    y2="80"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1BAFFF"></stop>
                                    <stop
                                      offset="1"
                                      stop-color="#0062E0"
                                    ></stop>
                                  </linearGradient>
                                  <clipPath id="facebook_color_svg__facebook0clip">
                                    <path fill="#fff" d="M0 0h80v80H0z"></path>
                                  </clipPath>
                                  <filter
                                    id="facebook_color_svg__facebook0_i"
                                    x="0"
                                    y="-1"
                                    width="80"
                                    height="81"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    ></feBlend>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    ></feColorMatrix>
                                    <feOffset dy="-1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="arithmetic"
                                      k2="-1"
                                      k3="1"
                                    ></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                    <feBlend
                                      in2="shape"
                                      result="effect1_innerShadow"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                              <h6>Facebook</h6>
                            </div>
                          </a>
                        </Grid>
                      )}
                      {userDetails?.socialMediaHandles?.instagram?.length >
                        0 && (
                        <Grid xs={4}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.${userDetails?.socialMediaHandles?.instagram}`}
                          >
                            <div className="button_with_link">
                              <svg
                                width="85"
                                height="85"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                              >
                                <g filter="url(#instagram_color_svg__filter0_i)">
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="url(#instagram_color_svg__paint0_radial)"
                                  ></path>
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="url(#instagram_color_svg__paint1_radial)"
                                  ></path>
                                  <path
                                    d="M38.762 10.476H50.19c2.381 0 4.858.19 7.239.857 4.19 1.143 7.428 3.524 9.619 7.238 1.333 2.286 1.904 4.762 2.19 7.334.19 2.285.286 4.571.286 6.857v16.952c0 2.572-.19 5.143-.857 7.715-1.429 5.142-4.572 8.761-9.524 10.666-2.381.953-4.953 1.238-7.524 1.334-6.286.095-12.571.19-18.857.19-2.667 0-5.429-.095-8-.476-3.714-.476-6.953-1.905-9.62-4.667-2.475-2.571-3.809-5.714-4.285-9.238-.571-4.762-.476-9.524-.476-14.38 0-4 .095-7.906.095-11.906.095-2.762.286-5.524 1.333-8.19 1.905-4.953 5.43-8 10.572-9.429 2.38-.666 4.857-.762 7.333-.857h9.048zm25.524 29.62c0-2.287.095-4.477 0-6.763-.096-2.762-.19-5.619-.477-8.38a9.298 9.298 0 00-2.285-5.239c-2.19-2.571-5.048-3.714-8.286-3.905-3.143-.19-6.38-.285-9.524-.285-5.714 0-11.428.095-17.143.285-2.095.096-4.095.572-5.904 1.715-2.953 1.81-4.477 4.571-4.762 7.904-.286 2.858-.381 5.715-.476 8.572 0 5.524 0 10.952.095 16.476 0 1.905.286 3.905.667 5.714.57 2.477 2 4.477 4.095 5.905 2.095 1.429 4.571 1.905 7.047 2 2.953.095 5.81.19 8.762.19 5.62 0 11.238-.095 16.857-.19C55.333 64 57.62 63.43 59.524 62c2.38-1.714 3.81-4.095 4.19-6.953.286-2.095.381-4.19.477-6.285.095-2.857.095-5.715.095-8.667z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M54.954 40c0 8.476-6.762 15.143-15.238 15.143-8.286 0-15.048-6.857-15.048-15.238 0-8.286 6.857-15.143 15.238-15.143 8.286.095 15.048 6.857 15.048 15.238zm-25.048 0c0 5.524 4.476 10 10 10s10-4.476 10-10c0-5.428-4.476-9.905-10-9.905-5.619 0-10 4.381-10 9.905zM55.618 20.762c2 0 3.524 1.524 3.524 3.428 0 1.905-1.524 3.524-3.429 3.524-1.904 0-3.523-1.523-3.523-3.428 0-2 1.523-3.524 3.428-3.524z"
                                    fill="#fff"
                                  ></path>
                                </g>
                                <defs>
                                  <radialGradient
                                    id="instagram_color_svg__paint0_radial"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(5.178 78.247) scale(101.57)"
                                  >
                                    <stop
                                      offset="0.09"
                                      stop-color="#FA8F21"
                                    ></stop>
                                    <stop
                                      offset="0.78"
                                      stop-color="#D82D7E"
                                    ></stop>
                                  </radialGradient>
                                  <radialGradient
                                    id="instagram_color_svg__paint1_radial"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(55.413 75.679) scale(89.3828)"
                                  >
                                    <stop
                                      offset="0.64"
                                      stop-color="#8C3AAA"
                                      stop-opacity="0"
                                    ></stop>
                                    <stop
                                      offset="1"
                                      stop-color="#8C3AAA"
                                    ></stop>
                                  </radialGradient>
                                  <filter
                                    id="instagram_color_svg__filter0_i"
                                    x="0"
                                    y="-1"
                                    width="80"
                                    height="81"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    ></feBlend>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    ></feColorMatrix>
                                    <feOffset dy="-1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="arithmetic"
                                      k2="-1"
                                      k3="1"
                                    ></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                    <feBlend
                                      in2="shape"
                                      result="effect1_innerShadow"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                              <h6>Instagram</h6>
                            </div>
                          </a>
                        </Grid>
                      )}
                      {userDetails?.socialMediaHandles?.linkedin?.length >
                        0 && (
                        <Grid xs={4}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.${userDetails?.socialMediaHandles?.linkedin}`}
                          >
                            <div className="button_with_link">
                              <svg
                                width="85"
                                height="85"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                              >
                                <g filter="url(#linkedin_color_svg__filter0_i)">
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="#0A66C2"
                                  ></path>
                                  <path
                                    d="M15.898 31.635h10.551V64.94H15.898V31.635zm5.278-16.576c1.21 0 2.394.352 3.4 1.012a6.028 6.028 0 012.253 2.694 5.896 5.896 0 01.347 3.468 5.967 5.967 0 01-1.676 3.073 6.155 6.155 0 01-3.134 1.642 6.227 6.227 0 01-3.535-.344 6.093 6.093 0 01-2.744-2.213 5.921 5.921 0 01-1.028-3.336 5.945 5.945 0 011.793-4.24 6.179 6.179 0 014.324-1.756zM32 31.86h10.127V36.4h.14c1.411-2.6 4.853-5.342 9.992-5.342 10.699-.023 12.682 6.83 12.682 15.715V64.94H54.377V48.846c0-3.832-.07-8.766-5.49-8.766-5.419 0-6.34 4.179-6.34 8.516v16.345H32V31.86z"
                                    fill="#fff"
                                  ></path>
                                </g>
                                <defs>
                                  <filter
                                    id="linkedin_color_svg__filter0_i"
                                    x="0"
                                    y="-1"
                                    width="80"
                                    height="81"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    ></feBlend>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    ></feColorMatrix>
                                    <feOffset dy="-1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="arithmetic"
                                      k2="-1"
                                      k3="1"
                                    ></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                    <feBlend
                                      in2="shape"
                                      result="effect1_innerShadow"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                              <h6>LinkedIn</h6>
                            </div>
                          </a>
                        </Grid>
                      )}
                      {userDetails?.socialMediaHandles?.twitter?.length > 0 && (
                        <Grid xs={4}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.${userDetails?.socialMediaHandles?.twitter}`}
                          >
                            <div className="button_with_link">
                              <svg
                                width="85"
                                height="85"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                              >
                                <g
                                  clip-path="url(#x_color_svg__clip0_802_79815)"
                                  filter="url(#x_color_svg__filter0_i_802_79815)"
                                >
                                  <path
                                    d="M18.095 0h43.81C71.905 0 80 8.095 80 18.095v43.81C80 71.905 71.905 80 61.905 80h-43.81C8.095 80 0 71.905 0 61.905v-43.81C0 8.095 8.095 0 18.095 0z"
                                    fill="#0E1317"
                                  ></path>
                                  <g clip-path="url(#x_color_svg__clip1_802_79815)">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M33.875 40.9L15.572 17.617H30.07l11.298 14.392 12.07-14.327h7.985L45.228 36.925l19.201 24.46H49.976L37.742 45.82l-13.06 15.52h-8.028L33.875 40.9zm18.207 16.17l-27.62-35.14h3.499l27.586 35.14h-3.465z"
                                      fill="#fff"
                                    ></path>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="x_color_svg__clip0_802_79815">
                                    <path fill="#fff" d="M0 0h80v80H0z"></path>
                                  </clipPath>
                                  <clipPath id="x_color_svg__clip1_802_79815">
                                    <path
                                      fill="#fff"
                                      transform="translate(16 16)"
                                      d="M0 0h48v48H0z"
                                    ></path>
                                  </clipPath>
                                  <filter
                                    id="x_color_svg__filter0_i_802_79815"
                                    x="0"
                                    y="-1"
                                    width="80"
                                    height="81"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    ></feBlend>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    ></feColorMatrix>
                                    <feOffset dy="-1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="arithmetic"
                                      k2="-1"
                                      k3="1"
                                    ></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                    <feBlend
                                      in2="shape"
                                      result="effect1_innerShadow_802_79815"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                              <h6>X (Twitter)</h6>
                            </div>
                          </a>
                        </Grid>
                      )}
                    </Grid>
                  </div>
                </>
              ) : (
                <div>
                  <h3>Profile not found</h3>
                </div>
              )}
              <div className="social_footer">
                <div
                  className="create_profile_button"
                  onClick={() =>
                    window.location.replace("https://selftact.com/")
                  }
                >
                  Create your own profile
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default EcardDesignComponent;
