import React, { useState } from 'react';

export default function PhotosynthesisSimulator() {
  const [sunlight, setSunlight] = useState(50);
  const [water, setWater] = useState(50);

  // Calculate photosynthesis rate (simple model: average of inputs)
  const photosynthesisRate = (sunlight + water) / 2;
  
  // Calculate outputs (arbitrary units)
  const glucose = Math.round(photosynthesisRate * 2);
  const oxygen = Math.round(photosynthesisRate * 1.5);

  // Determine plant health color based on inputs
  let plantColor;
  let healthStatus;
  
  if (sunlight < 20 || water < 20) {
    // Severe stress
    plantColor = '#8B4513';
    healthStatus = 'Critical';
  } else if (sunlight < 40 || water < 40) {
    // Moderate stress
    plantColor = '#DAA520';
    healthStatus = 'Stressed';
  } else if (sunlight > 70 && water > 70) {
    // Optimal conditions
    plantColor = '#228B22';
    healthStatus = 'Thriving';
  } else {
    // Adequate conditions
    plantColor = '#32CD32';
    healthStatus = 'Healthy';
  }

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Photosynthesis Simulator</h1>
      
      {/* Plant Visualization */}
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          fontSize: '80px',
          marginBottom: '15px',
          filter: `hue-rotate(${(sunlight - 50) * 1.5}deg) saturate(${water / 50})`
        }}>
          🌿
        </div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: plantColor, marginBottom: '10px' }}>
          {healthStatus}
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Health: {Math.round((sunlight + water) / 2)}%
        </div>
      </div>

      {/* Sliders */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Sunlight Intensity: {sunlight}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={sunlight}
          onChange={(e) => setSunlight(Number(e.target.value))}
          style={{ width: '100%', height: '8px', cursor: 'pointer' }}
        />
        <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
          0% = Dark | 100% = Full Sun
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Water Amount: {water}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={water}
          onChange={(e) => setWater(Number(e.target.value))}
          style={{ width: '100%', height: '8px', cursor: 'pointer' }}
        />
        <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
          0% = Drought | 100% = Abundant
        </div>
      </div>

      {/* Output Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
        marginBottom: '25px'
      }}>
        <div style={{
          backgroundColor: '#e8f5e9',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Glucose</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2e7d32' }}>{glucose}</div>
          <div style={{ fontSize: '11px', color: '#999', marginTop: '5px' }}>molecules/min</div>
        </div>

        <div style={{
          backgroundColor: '#e1f5fe',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Oxygen</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0277bd' }}>{oxygen}</div>
          <div style={{ fontSize: '11px', color: '#999', marginTop: '5px' }}>molecules/min</div>
        </div>
      </div>

      {/* Information Box */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '13px',
        lineHeight: '1.6',
        color: '#555'
      }}>
        <strong>How it works:</strong> Photosynthesis requires both sunlight and water. The plant uses these to produce glucose (food) and oxygen. Low levels of either input reduce output significantly.
      </div>
    </div>
  );
}