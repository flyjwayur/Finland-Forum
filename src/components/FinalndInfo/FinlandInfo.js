import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap";
import "./finlandInfo.css";
import uuid from 'uuid';

const FinlandInfo = ({ info }) => {
  const htmlFromAPI = info => {
    return info.map((info) => {
      let id = info.id ? info.id : uuid.v4();
      let title = () => {
        if(info.name.en){
          return info.name.en;
        }else if(info.name.fi){
          return info.name.fi;
        }else{
          return 'Title';
        }};
      let description = () => {
      if(info.short_description.en){
        return info.short_description.en;
      }else if(info.short_description.fi){
        return info.short_description.fi;
      }else{
        return 'Event description';
      }}

      let image = (info.images[0]) ? info.images[0].url : "";

      let imageName = info.images.name;
      let externalLink = (info.external_links[0]) ? info.external_links[0].link : 
      "/info";
      let startTime = (info.start_time) ? info.start_time.replace("T", ", ").replace(":00Z", " ") : "";
      let endTime = (info.end_time) ? info.end_time.replace("T", ", ").replace(":00Z", " ") : "";
      let location = (info.location_extra_info) ? info.location_extra_info.fi : "location info comes :D";
      let regexForUpdatedTime = /[.]+[0-9]+[Z]/g;
      let updatedTime = (info.last_modified_time) ?  info.last_modified_time.replace("T", " ").replace(regexForUpdatedTime," ") : "Last updated 3 mins ago";
      let price = () => {
        if(info.offers[0]){
          if(info.offers[0].is_free){
            return "free";
          }else{
            return info.offers[0].price;
          }
        }else{
          return "event price.."
        }
      }
      return (
        <Card key={id} className="infoCard">
          <CardBody>
            <CardTitle>{title()}</CardTitle>
          </CardBody>
          <img width="100%" src={image} alt={imageName} />
          <CardBody>
            <CardText dangerouslySetInnerHTML={{ __html: description() }} />
            <CardText>Date : {startTime} ~ {endTime}</CardText>
            <CardText>Location : {location}</CardText>
            <CardText>Price : {price()}</CardText>
            <CardText>
            <small className="text-muted">Last updated time :{updatedTime.toLocaleString()}</small>
            </CardText>
            <CardLink href={`${externalLink}`}>Event link</CardLink>
          </CardBody>
        </Card>
      );
    });
  };

  return <div className="card_wrapper">{htmlFromAPI(info)}</div>;
};

export default FinlandInfo;
