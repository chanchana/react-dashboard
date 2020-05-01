import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
import Card from './Card'
import LinkButton from './LinkButton'
import ClusterSummary from './ClusterSummary'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import SimpleMap from './simple-map.png'
import IconUp from './icon-up.gif'

import './App.css'

const data = [
  { name: '12:00', ClickedRate: 0.10, },
  { name: '13:00', ClickedRate: 0.15, },
  { name: '14:00', ClickedRate: 0.08, },
  { name: '15:00', ClickedRate: 0.12, },
  { name: '16:00', ClickedRate: 0.14, },
  { name: '17:00', ClickedRate: 0.18, },
]

const dataB = [
  {
    subject: 'Math', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Chinese', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'English', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Geography', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Physics', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'History', A: 65, B: 85, fullMark: 150,
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }}></div>
      <Container style={{ padding: '30px 0px' }}>
        {/* Header Row */}
        <Row noGutters>
          <Col md={4}>
            <Card title="Clicked Rate">
              <div style={{ position: 'absolute', right: '30px', top: '30px', fontWeight: 'bold', fontSize: '32px' }}>
                18%<img src={IconUp} width="34x" />
              </div>
              <ResponsiveContainer minHeight='160px' height='100%' width='100%'>
                <AreaChart data={data} margin={{ top: 12, right: 30, left: 0, bottom: 10, }}>
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="ClickedRate" stroke="#82ca9d" fillOpacity={1} fill="url(#color)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col md={3}>
            <Card title="Advertisement">
              <p style={{ textAlign: 'left' }}>
                Total Ads
              <span style={{ float: 'right' }}>
                  <b>1,412</b>
                </span>
              </p>
              <p style={{ textAlign: 'left' }}>
                Active Ads
              <span style={{ float: 'right' }}>
                  <b>374</b>
                </span>
              </p>
            </Card>
          </Col>
          <Col md={5}>
            <Card title="Top Ads">
              <LinkButton title="Cloned 5thgeneration orchestration" tailing="10%" />
              <LinkButton title="Monitored national standardization" tailing="9%" />
              <LinkButton title="Organic bottom-line service-desk" tailing="9%" />
            </Card>
          </Col>
        </Row>

        {/* Custer Row */}
        <Row noGutters>
          <Col>
            <Card title="Cluster Summary">
              <ClusterSummary />
            </Card>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row noGutters>
          <Col md={4}>
            <Card title="Ad Stream by Country">
              <ResponsiveContainer minHeight='160px' height='100%' width='100%'>
                <img src={SimpleMap} />
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col md={4}>
            <Card title="Top Website Clicked Rate">
              <LinkButton title="yantip.com" tailing="24%" />
              <LinkButton title="tinaja.com" tailing="18%" />
              <LinkButton title="somyud.co.th" tailing="16%" />
            </Card>
          </Col>
          <Col md={4}>
            <Card title="Click/Not Click in Each Hour">
              <ResponsiveContainer minHeight='240px' height='100%' width='100%' >
                <RadarChart outerRadius={120} data={dataB} >
                  <PolarGrid />
                  <Radar name="Click" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
                  <Radar name="Not Click" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5} />
                  <Legend align="center" verticalAlign="bottom" />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
              <div style={{height:'20px'}}></div>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default App
