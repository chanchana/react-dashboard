import React from 'react'
import Card from './Card'
import LinkButton from './LinkButton'
import ClusterBubble from './ClusterBubble'
import { Row, Col, Button } from 'react-bootstrap'
import ReactWordcloud from 'react-wordcloud';
// import WordCloud from "react-d3-cloud";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faImage, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
// import TagCloud from 'react-tag-cloud';
import data from './data.json'

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import {
  PieChart, Pie,
} from 'recharts';


class IconChart extends React.Component {

  render() {

    const mediaType = [
      { name: 'Video', icon: faVideo },
      { name: 'Banner', icon: faImage },
      { name: 'Pop-up', icon: faWindowRestore },
    ]

    if (this.props.order == 1) {
      return (
        <div>
          <FontAwesomeIcon style={{ fontSize: '80px', }} icon={mediaType[this.props.type].icon} />
          <p style={{ fontSize: '28px' }}>{this.props.value}% {mediaType[this.props.type].name}</p>
        </div>
      )
    } else if (this.props.order == 2) {
      return (
        <div>
          <FontAwesomeIcon style={{ fontSize: '30px' }} icon={mediaType[this.props.type].icon} />
          <p>{this.props.value}% {mediaType[this.props.type].name}</p>
        </div>
      )
    } else if (this.props.order == 3) {
      return (
        <div>
          <FontAwesomeIcon style={{ fontSize: '20px' }} icon={mediaType[this.props.type].icon} />
          <p>{this.props.value}% {mediaType[this.props.type].name}</p>
        </div>
      )
    }
    return (
      <p>Loading</p>
    )
  }
}


class ClusterSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      activeCluster: [false, false, false, false]
    }
    // this.handleInputLink = this.handleInputLink.bind(this)
    // this.handleInputName = this.handleInputName.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.clickCluster = this.clickCluster.bind(this)
  }

  subtitle() {
    if (this.state.current == 0)
      return 'Overall Summary'
    else 
      return `Cluster #${this.state.current} Summary`
  }

  clickCluster(number) {
    var activeClusterList = [false, false, false, false]
    if (number > 0)
      activeClusterList[number - 1] = true
    this.setState({current: number})
    this.setState({activeCluster: activeClusterList})
    console.log(number)
  }

  cloudFontSize = (value) => Math.log2(value) * 5
  cloudFonrColor = (value) => ``

  
  render() {
    const wtopics = [
        {"text": "Test", "value": 23423},
        {"text": "Test2", "value": 2423},
        {"text": "Test3", "value": 27}
    ]

    const topics = data.clusters[this.state.current].words

    const dataX = [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      },
    ];

    const data01 = [
      { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 }, { name: 'Group C', value: 300 }, { name: 'Group C', value: 300 }, { name: 'Group C', value: 300 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text style={{ fontSize: '12px' }} x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}% ${data.clusters[this.state.current].categories[index].name}`}
        </text>
      );
    };

    const fontSizeMapper = word => Math.log2(word.value) * 5;
    

    return (
      <div>
        <Row>
          <Col md={4}>
            <Button variant="light" onClick={() => this.clickCluster(0)}>Show All</Button>
            <div style={{width:'100%', height:'420px'}}>
              <p onClick={() => this.clickCluster(1)}><ClusterBubble number='1' name={data.clusters[1].name} percentage={data.clusters[1].percentage} x={170} y={50} radius={90} active={this.state.activeCluster[0]}/></p>
              <p onClick={() => this.clickCluster(2)}><ClusterBubble number='2' name={data.clusters[2].name} percentage={data.clusters[2].percentage} x={50} y={200} radius={80} active={this.state.activeCluster[1]}/></p>
              <p onClick={() => this.clickCluster(3)}><ClusterBubble number='3' name={data.clusters[3].name} percentage={data.clusters[3].percentage} x={220} y={280} radius={60} active={this.state.activeCluster[2]}/></p>
              <p onClick={() => this.clickCluster(4)}><ClusterBubble number='4' name={data.clusters[4].name} percentage={data.clusters[4].percentage} x={20} y={80} radius={60} active={this.state.activeCluster[3]}/></p>
            </div>
          </Col>

          <Col style={{ marginTop: '-50px' }} md={8}>
            <Card title={this.subtitle()}>
              <p><b>Top Words </b></p>
              <Row>
                <Col md={7}>
                  <ResponsiveContainer minHeight='200px' height='100%' width='100%'>
                  <div style={{ width: '100%', height: '100%' }}>
                    <ReactWordcloud options={{
                      fontFamily: 'sans-serif',
                      rotations: 1,
                      rotationAngles: [0, 0],
                    }}
                    words={data.clusters[this.state.current].words.slice(0, 100)} />
                  </div>
                  </ResponsiveContainer>
                </Col>

                <Col md={5}>
                  <ResponsiveContainer minHeight='200px' height='100%' width='100%'>
                    <BarChart data={data.clusters[this.state.current].words.slice(0, 5)} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="text" interval={0}/>
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </Col>
              </Row>

              <Row style={{ marginTop: '40px' }}>
                <Col md={6}>
                  <p><b>Advertisement Categories</b></p>
                </Col>

                <Col md={6}>
                  <p><b>Advertisement Types</b></p>
                </Col>
              </Row>

              <Row style={{ marginBottom: '20px' }}>
                <Col md={6}>
                  <ResponsiveContainer minHeight='160px' height='100%' width='100%'>
                    <PieChart>
                      <Pie dataKey="value" isAnimationActive={true} data={data.clusters[this.state.current].categories} outerRadius={80} fill="#8884d8" label={renderCustomizedLabel} labelLine={false} >
                        {
                          data.clusters[this.state.current].categories.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>

                <Col md={6} style={{ textAlign: 'center', padding: '25px 10px' }}>
                  <Row>
                    <Col>
                      <IconChart order={1} type={data.clusters[this.state.current].types[0].type} value={data.clusters[this.state.current].types[0].percentage} />
                    </Col>
                    <Col>
                      <IconChart order={2} type={data.clusters[this.state.current].types[1].type} value={data.clusters[this.state.current].types[1].percentage} />
                      <IconChart order={3} type={data.clusters[this.state.current].types[2].type} value={data.clusters[this.state.current].types[2].percentage} />
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ClusterSummary