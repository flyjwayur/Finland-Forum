import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardLink,
  CardColumns
} from "reactstrap";
import "./finlandInfo.css";
import uuid from "uuid";

const FinlandInfo = ({ info }) => {
  const htmlFromAPI = info => {
    return info.map(info => {
      let id = info.id ? info.id : uuid.v4();
      let title = () => {
        if (info.name.en) {
          return info.name.en;
        } else if (info.name.fi) {
          return info.name.fi;
        } else {
          return "Title";
        }
      };

      let description = () => {
        if (info.short_description.en) {
          return info.short_description.en;
        } else if (info.short_description.fi) {
          return info.short_description.fi;
        }
        return "Event description";
      };

      let image = info.images[0] ? info.images[0].url : "";

      let imageName = info.images.name;
      let externalLink = info.external_links[0]
        ? info.external_links[0].link
        : "/info";
      let startTime = info.start_time
        ? info.start_time.replace("T", ", ").replace(":00Z", " ")
        : "";
      let endTime = info.end_time
        ? info.end_time.replace("T", ", ").replace(":00Z", " ")
        : "";
      let location = info.location_extra_info
        ? info.location_extra_info.fi
        : "location info comes :D";
      let regexForUpdatedTime = /[.]+[0-9]+[Z]/g;
      let updatedTime = info.last_modified_time
        ? info.last_modified_time
            .replace("T", " ")
            .replace(regexForUpdatedTime, " ")
        : "Last updated 3 mins ago";
      let price = () => {
        if (info.offers[0]) {
          if (info.offers[0].is_free === true) {
            if (info.offers[0].is_free) {
              return "free";
            } else if (info.offers[0].is_free === false) {
              return info.offers[0].price.fi || info.offers[0].price.en;
            }
          }
        }
        return "event price ..";
      };
      return (
          <Card key={id} className="infoCard">
            <CardHeader style={{ backgroundColor: '#f7cb15', color: '#364652', fontWeight:800, fontSize : '1.3rem'}}>{title()}</CardHeader>
            <img width="100%" src={image} alt={imageName} />
            <CardBody>
              <CardText>{description()}</CardText>
              <CardText>
                <span className='textTitle'>Date :</span> {startTime} ~ {endTime}
              </CardText>
              <CardText><span className='textTitle'>Location :</span> {location}</CardText>
              <CardText><span className='textTitle'>Price :</span> {price()}</CardText>
              <CardText className='timeToRight'>
                <small className="text-muted">
                  Last updated time :{updatedTime}
                </small>
              </CardText>
              <CardLink href={`${externalLink}`}>More info..</CardLink>
            </CardBody>
          </Card>
      );
    });
  };

  return <CardColumns className="card_wrapper">{htmlFromAPI(info)}</CardColumns>;
};

export default FinlandInfo;
