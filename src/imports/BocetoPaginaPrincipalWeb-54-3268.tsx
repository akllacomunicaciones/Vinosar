import svgPaths from "./svg-0pm8wvpdtl";
import imgImageWithFallback from "figma:asset/a5687fbd27ff5bd35e740adae0dac48878a75fbd.png";
import imgContainer from "figma:asset/309b15f66aab1c86385943737b1a3253aa3b52e8.png";
import imgContainer1 from "figma:asset/2cb27528d19dfeefbc9e01dd3131620a45d9e131.png";
import imgContainer2 from "figma:asset/27ee4049fe06ec0691d3f3758f92e9afbd1d0baf.png";
import imgContainer3 from "figma:asset/10935173d6141629f8ccaf020e3ccea4611df815.png";
import imgContainer4 from "figma:asset/3a298a9dce4dbbf526ebbf059b82bd26b4d9d7f5.png";
import imgContainer5 from "figma:asset/98b7f67895d0d70b125fd5ebf4eee2744b3ec946.png";
import imgContainer6 from "figma:asset/8a26b2280cb970f024a9326d35b408a1728cc2ea.png";
import imgContainer7 from "figma:asset/4097180192c50628d388e3d7d0975b1954736b47.png";
import imgContainer8 from "figma:asset/57ce65031900c52744d96aa918d22ad560889242.png";
import imgContainer9 from "figma:asset/00695573226f79711b234f5781ea523d05c7fc1a.png";
import imgContainer10 from "figma:asset/91413e7af37b633ae6088da4ea3e3df140398f42.png";
import imgContainer11 from "figma:asset/de2ae7c2601f68ed21c9a4232db5b2fa0a249873.png";
import imgContainer12 from "figma:asset/9dcf192da4e63ed72e16b176dc18c5d69c639c43.png";
import imgContainer13 from "figma:asset/a48888d467ee30e8fc84eb09f7874ac71ee2128b.png";
import imgContainer14 from "figma:asset/cff470cbb027812989a73dd313094f4cf7975286.png";
import imgContainer15 from "figma:asset/60dcbdee73fed8df7451ac7a49ed7d36baade423.png";

function Heading() {
  return (
    <div className="font-['Playfair_Display:Regular',sans-serif] font-normal h-[48px] leading-[24px] relative shrink-0 text-[#1f1f1f] text-[16px] text-nowrap w-full whitespace-pre" data-name="Heading 1">
      <p className="absolute left-0 top-[-1px]">Descubre Vinos</p>
      <p className="absolute left-0 top-[23px]">Excepcionales</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#ababab] text-[18px] top-px w-[338px]">Los mejores vinos del Perú de bodegas seleccionadas. Cada botella cuenta una historia única.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[159.75px] items-start left-0 top-0 w-[376.797px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#3d1a2b] h-[48px] left-0 rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[207.75px] w-[205.594px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[103px] not-italic text-[16px] text-center text-nowrap text-white top-[11px] translate-x-[-50%] whitespace-pre">Explorar Colección</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[255.75px] left-[32px] top-[276.13px] w-[376.797px]" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[589.188px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.2)] h-[500px] left-0 to-[rgba(0,0,0,0)] top-0 w-[589.188px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="bg-white h-[500px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[508px] items-start left-[472.8px] pb-0 pt-[4px] px-[4px] rounded-[6px] top-[150px] w-[597.188px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-stone-50 h-[738px] left-0 top-0 w-[1102px]" data-name="Section">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="h-[232px] w-full" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Tinto</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[91px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[179px]">Descripción del vino 1. Elegante y balanceado con notas características de la región.</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[207px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label />
      <Container7 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[298px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[360px] w-[185.5px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[462px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph1 />
      <Container8 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container6 />
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer1} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Blanco</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[91px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[164px]">Descripción del vino 2. Aromas intensos y sabor persistente con gran estructura.</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[207px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label1 />
      <Container17 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[298px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[360px] w-[185.5px]" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[462px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph3 />
      <Container18 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container16 />
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon1 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer2} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Borgoña</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[91px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[171px]">Descripción del vino 3. Suave y aromático con un final prolongado y agradable.</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[207px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label2 />
      <Container27 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[298px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container29 />
    </div>
  );
}

function Button14() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[360px] w-[185.5px]" data-name="Container">
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[462px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph5 />
      <Container28 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container26 />
          <Container32 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon2 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer3} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Rose</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[91px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[154px]">Descripción del vino 4. Cuerpo completo con taninos equilibrados y complejidad aromática.</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[207px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label3 />
      <Container37 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[298px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container39 />
    </div>
  );
}

function Button19() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[360px] w-[185.5px]" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[462px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph7 />
      <Container38 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container36 />
          <Container42 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon3 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer4} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Borgoña Blanco</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[184px]">Descripción del vino 5. Fresco y vibrante con notas frutales y florales.</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label4 />
      <Container47 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container49 />
    </div>
  );
}

function Button24() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button24 />
      <Button25 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph9 />
      <Container48 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container46 />
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon4 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer5} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Perfecto Amor</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[165px]">Descripción del vino 6. Expresivo y delicado con gran elegancia en boca.</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button26 />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label5 />
      <Container57 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Button29() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button29 />
      <Button30 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph11 />
      <Container58 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="[grid-area:2_/_2] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container56 />
          <Container62 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon5 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer6} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Puro de Uva</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[91px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[156px]">Descripción del vino 7. Robusto y estructurado ideal para acompañar comidas.</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button31() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button31 />
      <Button32 />
      <Button33 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[207px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label6 />
      <Container67 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[298px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container69 />
    </div>
  );
}

function Button34() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[360px] w-[185.5px]" data-name="Container">
      <Button34 />
      <Button35 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[462px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph13 />
      <Container68 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="[grid-area:2_/_3] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container66 />
          <Container72 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon6 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer7} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Gran Tinto</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[154px]">Descripción del vino 8. Balance perfecto entre acidez y dulzor natural.</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button36() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button36 />
      <Button37 />
      <Button38 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label7 />
      <Container77 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container79 />
    </div>
  );
}

function Button39() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button39 />
      <Button40 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Paragraph15 />
      <Container78 />
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="[grid-area:2_/_4] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container76 />
          <Container82 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon7 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer8} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Generoso</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[158px]">Descripción del vino 9. Aromático y persistente con notas de crianza.</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button41() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button41 />
      <Button42 />
      <Button43 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label8 />
      <Container87 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container89 />
    </div>
  );
}

function Button44() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button44 />
      <Button45 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph17 />
      <Container88 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="[grid-area:3_/_1] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container86 />
          <Container92 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon8 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer9} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Pasión</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[170px]">Descripción del vino 10. Intenso y complejo con gran potencial de guarda.</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button46() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button48() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button46 />
      <Button47 />
      <Button48 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label9 />
      <Container97 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container99 />
    </div>
  );
}

function Button49() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button49 />
      <Button50 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Paragraph19 />
      <Container98 />
      <Container100 />
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="[grid-area:3_/_2] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container96 />
          <Container102 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon9 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer10} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Tullu Corazón</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[91px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[155px]">Descripción del vino 11. Ligero y refrescante perfecto para cualquier ocasión.</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button51() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button53() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button51 />
      <Button52 />
      <Button53 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[207px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label10 />
      <Container107 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[298px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container109 />
    </div>
  );
}

function Button54() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button55() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[360px] w-[185.5px]" data-name="Container">
      <Button54 />
      <Button55 />
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[462px] relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph21 />
      <Container108 />
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="[grid-area:3_/_3] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container106 />
          <Container112 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon10 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer11} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container114 />
        </div>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino La Reina</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[169px]">Descripción del vino 12. Suave y sedoso con final prolongado y memorable.</p>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button56() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button57() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button56 />
      <Button57 />
      <Button58 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label11 />
      <Container117 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container119 />
    </div>
  );
}

function Button59() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button59 />
      <Button60 />
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Paragraph23 />
      <Container118 />
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="[grid-area:3_/_4] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container116 />
          <Container122 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon11 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer12} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container124 />
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container125 />
        </div>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Dulzura de Amor</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[157px]">Descripción del vino 13. Carácter distintivo con personalidad única.</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button61() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button62() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button63() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button61 />
      <Button62 />
      <Button63 />
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label12 />
      <Container127 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container129 />
    </div>
  );
}

function Button64() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button65() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button64 />
      <Button65 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Paragraph25 />
      <Container128 />
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container133() {
  return (
    <div className="[grid-area:4_/_1] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container126 />
          <Container132 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon12 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer13} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container134 />
        </div>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container135 />
        </div>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Estrella Casquina</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[171px]">Descripción del vino 14. Equilibrado y versátil para diversas ocasiones.</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button66() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button67() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button68() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button66 />
      <Button67 />
      <Button68 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label13 />
      <Container137 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container139 />
    </div>
  );
}

function Button69() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button70() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button69 />
      <Button70 />
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Paragraph27 />
      <Container138 />
      <Container140 />
      <Container141 />
    </div>
  );
}

function Container143() {
  return (
    <div className="[grid-area:4_/_2] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container136 />
          <Container142 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon13 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer14} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container144 />
        </div>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container145 />
        </div>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">Vino Paraíso Casquino</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[157px]">Descripción del vino 15. Elegante y refinado con notas excepcionales.</p>
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button71() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button72() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button73() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button71 />
      <Button72 />
      <Button73 />
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label14 />
      <Container147 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container149 />
    </div>
  );
}

function Button74() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button75() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button74 />
      <Button75 />
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Paragraph29 />
      <Container148 />
      <Container150 />
      <Container151 />
    </div>
  );
}

function Container153() {
  return (
    <div className="[grid-area:4_/_3] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container146 />
          <Container152 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[42.92px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.4">
          <path d="M16 44H32" id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M14 20H34" id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 30V44" id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb22bf80} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[133.859px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-center text-nowrap tracking-[0.3px] whitespace-pre">FOTO DEL PRODUCTO</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[72px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[133.859px]">
        <Icon14 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[232px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgContainer15} />
      <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[232px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Container154 />
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="bg-white h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container155 />
        </div>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[24px] w-[185.5px]" data-name="Heading 3">
      <p className="basis-0 font-['Playfair_Display:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1f1f1f] text-[20px]">VinoArándano</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[100px] w-[185.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#ababab] text-[14px] top-0 w-[171px]">Descripción del vino 16. Premium y exclusivo de la más alta calidad.</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">SELECCIONA TIPO:</p>
    </div>
  );
}

function Button76() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center">Seco</p>
        </div>
      </div>
    </div>
  );
}

function Button77() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Semiseco</p>
        </div>
      </div>
    </div>
  );
}

function Button78() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-center text-nowrap whitespace-pre">Dulce</p>
        </div>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button76 />
      <Button77 />
      <Button78 />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[75px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[196px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Label15 />
      <Container157 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[48.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] text-nowrap tracking-[0.3px] whitespace-pre">PRECIO:</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[33px] relative shrink-0 w-[76.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[76.234px]">
        <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#3d1a2b] text-[22px] text-nowrap top-[-1px] whitespace-pre">S/. 0.00</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[46px] items-start left-[24px] pb-0 pt-[13px] px-0 top-[287px] w-[185.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container159 />
    </div>
  );
}

function Button79() {
  return (
    <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[42.13px] not-italic text-[#1f1f1f] text-[14px] text-center top-[11px] translate-x-[-50%] w-[28px]">Ver Más</p>
      </div>
    </div>
  );
}

function Button80() {
  return (
    <div className="basis-0 bg-[#3d1a2b] grow h-[62px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45px] not-italic text-[14px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[78px] items-start left-[24px] pb-0 pt-[16px] px-0 top-[349px] w-[185.5px]" data-name="Container">
      <Button79 />
      <Button80 />
    </div>
  );
}

function Container162() {
  return (
    <div className="h-[451px] relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Paragraph31 />
      <Container158 />
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container163() {
  return (
    <div className="[grid-area:4_/_4] bg-white place-self-stretch relative rounded-[6px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container156 />
          <Container162 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-stone-50 box-border gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[744px_744px_744px_minmax(0px,_1fr)] h-[3221px] left-0 px-[32px] py-[80px] top-[885px] w-[1102px]" data-name="Section">
      <Container13 />
      <Container23 />
      <Container33 />
      <Container43 />
      <Container53 />
      <Container63 />
      <Container73 />
      <Container83 />
      <Container93 />
      <Container103 />
      <Container113 />
      <Container123 />
      <Container133 />
      <Container143 />
      <Container153 />
      <Container163 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[832px]" data-name="Heading 2">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[24px] left-[416.11px] text-[16px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre">¿Eres Sommelier?</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[29.25px] left-[32px] top-[48px] w-[832px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[416.22px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Únete a nuestra comunidad exclusiva de expertos en vino y accede a beneficios especiales</p>
    </div>
  );
}

function Button81() {
  return (
    <div className="absolute bg-[#c4a976] h-[48px] left-[328px] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[109.25px] w-[239.984px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[120px] not-italic text-[16px] text-center text-nowrap text-white top-[11px] translate-x-[-50%] whitespace-pre">Unirme a la Comunidad</p>
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[157.25px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph32 />
      <Button81 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#3d1a2b] h-[317.25px] items-start left-0 pb-0 pt-[80px] px-[103px] to-[#5a2a3f] top-[4106px] w-[1102px]" data-name="Section">
      <Container164 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p933b100} id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <Icon15 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#c4a976] text-[14px] text-nowrap top-0 tracking-[0.35px] whitespace-pre">Turismo</p>
    </div>
  );
}

function Button82() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[154.766px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[77px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2px] tracking-[0.15px] translate-x-[-50%] whitespace-pre">Destinos Destacados</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="List Item">
      <Button82 />
    </div>
  );
}

function Button83() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[109.469px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[55.5px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2px] tracking-[0.15px] translate-x-[-50%] whitespace-pre">Tours Privados</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="List Item">
      <Button83 />
    </div>
  );
}

function Button84() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[167.516px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[84px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2px] tracking-[0.15px] translate-x-[-50%] whitespace-pre">Ver Todos los Destinos</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="List Item">
      <Button84 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[91.5px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container165() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20012900} id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ad6c100} id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12fdd280} id="Vector_3" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pf491d00} id="Vector_4" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <Icon16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#c4a976] text-[14px] text-nowrap top-0 tracking-[0.35px] whitespace-pre">Rutas de Ciclismo</p>
    </div>
  );
}

function Button85() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[109.875px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[55px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2px] tracking-[0.15px] translate-x-[-50%] whitespace-pre">Rutas Premium</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="List Item">
      <Button85 />
    </div>
  );
}

function Button86() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[105.484px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[53px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2px] tracking-[0.15px] translate-x-[-50%] whitespace-pre">Tours Guiados</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="List Item">
      <Button86 />
    </div>
  );
}

function Button87() {
  return (
    <div className="absolute h-[22.5px] left-0 top-0 w-[143.734px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-[72px] not-italic text-[15px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2px] tracking-[0.15px] translate-x-[-50%] whitespace-pre">Ver Todas las Rutas</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="List Item">
      <Button87 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[91.5px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container166() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading19 />
      <List1 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#c4a976] text-[14px] text-nowrap top-0 tracking-[0.35px] whitespace-pre">Información</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-px w-[103.328px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">Sobre Nosotros</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-px w-[101.609px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">Cómo Reservar</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-px w-[26.594px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">FAQ</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container167() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading20 />
      <List2 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#c4a976] text-[14px] text-nowrap top-0 tracking-[0.35px] whitespace-pre">Contacto</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[158.188px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">Buenos Aires, Argentina</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon17 />
      <Text32 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_48_1432)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_48_1432">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[118.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[118.094px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">+54 11 1234 5678</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon18 />
      <Text33 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f8e7e80} id="Vector" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17070980} id="Vector_2" stroke="var(--stroke-0, #C4A976)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[134.078px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">info@vinosar.com.ar</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon19 />
      <Text34 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container168() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading21 />
      <List3 />
    </div>
  );
}

function Container169() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[136px] relative shrink-0 w-full" data-name="Container">
      <Container165 />
      <Container166 />
      <Container167 />
      <Container168 />
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[30px] left-0 text-[20px] text-nowrap text-white top-0 whitespace-pre">VINOS AR</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-nowrap whitespace-pre">© 2025 VINOS AR. Todos los derechos reservados.</p>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[54px] relative shrink-0 w-[290.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[54px] items-start relative w-[290.703px]">
        <Container170 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_52_2455)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p30b13c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_52_2455">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[36px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[36px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c4ad2f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-center p-px relative w-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[36px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[36px] items-start relative w-[140px]">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex h-[54px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container171 />
      <Container172 />
    </div>
  );
}

function Container174() {
  return (
    <div className="box-border content-stretch flex flex-col h-[87px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container173 />
    </div>
  );
}

function SharedFooter() {
  return (
    <div className="absolute bg-[#1f1f1f] box-border content-stretch flex flex-col gap-[64px] h-[447px] items-start left-0 pb-0 pt-[80px] px-[32px] top-[4423.25px] w-[1102px]" data-name="SharedFooter">
      <Container169 />
      <Container174 />
    </div>
  );
}

function VinosPage() {
  return (
    <div className="absolute bg-stone-50 h-[4870.25px] left-0 top-0 w-[1102px]" data-name="VinosPage">
      <Section />
      <Section1 />
      <Section2 />
      <SharedFooter />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc812900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[58.422px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#ababab] text-[14px] text-nowrap top-0 tracking-[0.35px] whitespace-pre">FILTROS</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <Text35 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">PRECIO</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-32px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">Todos</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-32px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">S/. 0 - 50</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-32px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">S/. 50 - 100</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-32px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">S/. 100 - 200</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-32px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">Más de S/. 200</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-stone-50 h-[37px] relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
    </div>
  );
}

function Container176() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label16 />
      <Dropdown />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[12px] tracking-[0.3px]">ORDENAR POR</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-563px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">Recomendados</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-563px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">Precio: Menor a Mayor</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-563px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">Precio: Mayor a Menor</p>
    </div>
  );
}

function Option8() {
  return (
    <div className="absolute left-[-563px] size-0 top-[-223px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#1f1f1f] text-[14px] top-0 w-0">Nombre A-Z</p>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-stone-50 h-[37px] relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option5 />
      <Option6 />
      <Option7 />
      <Option8 />
    </div>
  );
}

function Container177() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label17 />
      <Dropdown1 />
    </div>
  );
}

function Container178() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[61px] relative shrink-0 w-full" data-name="Container">
      <Container176 />
      <Container177 />
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[145px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[145px] items-start pb-0 pt-[24px] px-[32px] relative w-full">
          <Container175 />
          <Container178 />
        </div>
      </div>
    </div>
  );
}

function VinosPage1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[147px] items-start left-0 px-0 py-px top-[738px] w-[1102px]" data-name="VinosPage">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Container179 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[36px] relative shrink-0 w-[105.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[105.266px]">
        <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[36px] left-0 text-[#3d1a2b] text-[24px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">VINOS AR</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3d1a2b] text-[14px] text-center text-nowrap tracking-[0.35px] whitespace-pre">VINOS</p>
    </div>
  );
}

function Container180() {
  return <div className="bg-[#3d1a2b] h-[2px] shrink-0 w-full" data-name="Container" />;
}

function Button88() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[9.5px] h-[38.5px] items-start left-0 pb-0 pt-[10px] px-0 top-0 w-[45.859px]" data-name="Button">
      <Text37 />
      <Container180 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center text-nowrap tracking-[0.35px] whitespace-pre">TURISMO</p>
    </div>
  );
}

function Button89() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[38.5px] items-start left-[93.86px] pb-0 pt-[10px] px-0 top-0 w-[67.406px]" data-name="Button">
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center text-nowrap tracking-[0.35px] whitespace-pre">RUTAS</p>
    </div>
  );
}

function Button90() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[38.5px] items-start left-[209.27px] pb-0 pt-[10px] px-0 top-0 w-[48.016px]" data-name="Button">
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center text-nowrap tracking-[0.35px] whitespace-pre">CONTACTO</p>
    </div>
  );
}

function Button91() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[38.5px] items-start left-[305.28px] pb-0 pt-[10px] px-0 top-0 w-[81.453px]" data-name="Button">
      <Text40 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[386.734px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.5px] relative w-[386.734px]">
        <Button88 />
        <Button89 />
        <Button90 />
        <Button91 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button92() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[340px] pb-0 pt-[8px] px-[8px] rounded-[4px] size-[36px] top-px" data-name="Button">
      <Icon24 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[38px] left-0 rounded-[4px] top-0 w-[256px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[38px] items-center overflow-clip pl-[16px] pr-[40px] py-[8px] relative rounded-[inherit] w-[256px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Buscar...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e6e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[228px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[256px]" data-name="Container">
      <TextInput />
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_48_1399)" id="Icon">
          <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p190a8200} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_48_1399">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute bg-[#3d1a2b] content-stretch flex items-center justify-center left-[24px] rounded-[3.35544e+07px] size-[16px] top-[-4px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Button93() {
  return (
    <div className="absolute left-[280px] rounded-[4px] size-[36px] top-px" data-name="Button">
      <Icon26 />
      <Text41 />
    </div>
  );
}

function Container182() {
  return (
    <div className="h-[38px] relative shrink-0 w-[376px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[376px]">
        <Button92 />
        <Container181 />
        <Button93 />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[69px] items-center justify-between px-[32px] py-0 relative w-full">
          <Text36 />
          <Navigation />
          <Container182 />
        </div>
      </div>
    </div>
  );
}

function SharedHeader() {
  return (
    <div className="absolute bg-[rgba(250,250,249,0.95)] box-border content-stretch flex flex-col h-[70px] items-start left-0 pb-px pt-0 px-0 top-[600px] w-[1102px]" data-name="SharedHeader">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container183 />
    </div>
  );
}

export default function BocetoPaginaPrincipalWeb() {
  return (
    <div className="bg-stone-50 relative size-full" data-name="Boceto Página Principal Web">
      <VinosPage />
      <VinosPage1 />
      <SharedHeader />
    </div>
  );
}