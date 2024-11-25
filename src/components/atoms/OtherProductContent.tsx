const OtherProductContent: React.FC = () => {
  const bars = [
    { color: 'bg-lime-500', top: '21px' },
    { color: 'bg-[#fcfcfc]', top: '45px' },
    { color: 'bg-[#fcfcfc]', top: '69px' },
    { color: 'bg-[#ffc762]', top: '111px' },
    { color: 'bg-[#fcfcfc]', top: '135px' },
    { color: 'bg-[#fcfcfc]', top: '159px' },
    { color: 'bg-[#94d0fe]', top: '201px' },
    { color: 'bg-[#fcfcfc]', top: '225px' },
    { color: 'bg-[#fcfcfc]', top: '249px' }
  ]

  return (
    <div className="w-[304px] h-[280px] left-0 top-[70px] absolute bg-white rounded-2xl">
      {bars.map((bar, index) => (
        <div key={index}>
          <div className={`w-3 h-3 left-[21px] top-[${bar.top}] absolute ${bar.color} rounded-[10px]`} />
          <div className={`w-[169px] h-3 left-[47px] top-[${bar.top}] absolute ${bar.color} rounded-[10px]`} />
        </div>
      ))}
    </div>
  )
}

export default OtherProductContent
