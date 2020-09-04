const GNLogo = require('./Img/GNLogo2.png');
const Slogo = require('./Img/SLogo1.png');
const CLlogo = require('./Img/CLLogo1.png');
const GIlogo = require('./Img/GILogo1.png');
const DAlogo = require('./Img/DALogo3.png');
const GCTlogo = require('./Img/GCTLogo1.png');
const GCElogo = require('./Img/GCSLogo.png');
const Plogo = require('./Img/1PLogo3.png');
const RTlogo = require('./Img/RTLogo3.png');
const ARlogo = require('./Img/ARLogo2.png');
const RDlogo = require('./Img/RDLogo.png');
const GLlogo = require('./Img/GLLogo.png');

const goodnewspdf = require('./Files/GoodNews.pdf');
const growinginstructionspdf = require('./Files/GrowingInstructions.pdf');
const christianlifepdf = require('./Files/ChristianLife.pdf');
const greatcommissionsimplifiedpdf = require('./Files/GreatCommissionSimplified1.pdf');
const tplanpdf = require('./Files/1T3Plan.pdf');
const additionalresourcespdf = require('./Files/AdditionalResources.pdf');
const greatcommissiontheologypdf = require('./Files/GreatCommissionTheology.pdf');
const reasonabledesignpdf = require('./Files/ReasonableDesign.pdf');
const reasonabletrustpdf = require('./Files/ReasonableTrust.pdf');
const guideforlifepdf = require('./Files/AGuideforLife.pdf');
const sharingthegoodnewspdf = require('./Files/SharingTheGoodNews.pdf');
const discipleshipatlas = require('./Files/AChristianDiscipleshipAtlas.pdf');

export default {
  "files": [
    {
      "id": "1",
      "name": "The Good News",
      "content": goodnewspdf,
      "logo": GNLogo
    },
    {
      "id": "2",
      "name": "Sharing The Good News",
      "content": sharingthegoodnewspdf,
      "logo": Slogo
    },
    {
      "id": "3",
      "name": "The Christian Life",
      "content": christianlifepdf,
      "logo": CLlogo
    },
    {
      "id": "4",
      "name": "Growing Instructions",
      "content": growinginstructionspdf,
      "logo": GIlogo
    },
    {
      "id": "5",
      "name": "A Guide for Life",
      "content": guideforlifepdf,
      "logo": GLlogo
    },
    {
      "id": "6",
      "name": "A Discipleship Atlas",
      "content": discipleshipatlas,
      "logo": DAlogo
    },
    {
      "id": "7",
      "name": "A Theology of the Great Commission",
      "content": greatcommissiontheologypdf,
      "logo": GCTlogo
    },
    {
      "id": "8",
      "name": "The Great Commission - Simply Explained",
      "content": greatcommissionsimplifiedpdf,
      "logo": GCElogo
    },
    {
      "id": "9",
      "name": "1T3 Plan",
      "content": tplanpdf,
      "logo": Plogo
    },
    {
      "id": "10",
      "name": "Reasonable Trust",
      "content": reasonabletrustpdf,
      "logo": RTlogo
    },
    {
      "id": "11",
      "name": "Reasonable Design",
      "content": reasonabledesignpdf,
      "logo": RDlogo
    },
    {
      "id": "12",
      "name": "Additional Resources",
      "content": additionalresourcespdf,
      "logo": ARlogo
    },
  ]
} 