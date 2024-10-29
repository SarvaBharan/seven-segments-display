// 7SegmentDisplay.tsx
import React from 'react';

// Segment type
type Segment = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

// Map each digit to its 7-segment binary representation
const segmentMap: Record<number, string> = {
  0: '1111110',
  1: '0110000',
  2: '1101101',
  3: '1111001',
  4: '0110011',
  5: '1011011',
  6: '1011111',
  7: '1110000',
  8: '1111111',
  9: '1111011',
};

// Function to create segment display for a given digit
function display7Segment(digit: number): Record<Segment, boolean> {
  const binaryString = segmentMap[digit] || '0000000';

  return {
    A: binaryString[0] === '1',
    B: binaryString[1] === '1',
    C: binaryString[2] === '1',
    D: binaryString[3] === '1',
    E: binaryString[4] === '1',
    F: binaryString[5] === '1',
    G: binaryString[6] === '1',
  };
}

// React component for the 7-segment display
interface SevenSegmentDisplayProps {
  digit: number;
}

const SevenSegmentDisplay: React.FC<SevenSegmentDisplayProps> = ({ digit }) => {
  const segments = display7Segment(digit);

  return (
    <div className="seven-segment-display">
      <div className={`segment segment-a ${segments.A ? 'on' : 'off'}`} />
      <div className={`segment segment-b ${segments.B ? 'on' : 'off'}`} />
      <div className={`segment segment-c ${segments.C ? 'on' : 'off'}`} />
      <div className={`segment segment-d ${segments.D ? 'on' : 'off'}`} />
      <div className={`segment segment-e ${segments.E ? 'on' : 'off'}`} />
      <div className={`segment segment-f ${segments.F ? 'on' : 'off'}`} />
      <div className={`segment segment-g ${segments.G ? 'on' : 'off'}`} />
    </div>
  );
};

export default SevenSegmentDisplay;
