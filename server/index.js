import express from 'express'
import cors from 'cors'
import { v4 } from 'uuid'
import path from 'path'
import { fileURLToPath } from 'url';
import "dotenv/config";

const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.get('/produtos', (req, res) => {
   try {
      const produtos = [
         {
            id: v4(),
            name: "Shampoo AQ-01",
            lightDetails: "Crescimento e melhora dos fios.",
            details: "O shampoo AQ-01 da Princípia é um dermocosmético de alta eficácia focado em combater a queda e a quebra capilar. Formulado com 2% de niacinamida e 1% de cafeína, ele estimula os folículos, fortalece a fibra da raiz às pontas e devolve o volume aos cabelos.",
            price: 48.99,
            image: "/images/shampoo-principia.png",
            link: "https://www.amazon.com.br/Dermatol%C3%B3gico-Tensoativos-Condicionantes-Umectantes-Niacinamida/dp/B0D3J3L4ZW/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RR5VHTPTPDQ2&dib=eyJ2IjoiMSJ9.LIZLeTc2GWVFTaZgSMUi8p-nwjxLGNxie-e4Y62tNcvruveEsbeKTQLlFaSkGj06eKS-u1FYsKMXrlDT1FvZwNxLw4NAS2U-y7siUUjZ9u9NIngpxsi-leJSx4diJhLxXW439FICxD1nGphNxFY3ssqYSu1GiZ1YMVAXXZApMWiGzo_rJf2idJwAF2igIXDXc0GwXkbdDOfz7uBwaSy-dK_-TpCvCOp_Q_49FZjaZpVZj7J3lh-Z7NX1QR9zAYsb17tKZTR-RxdWqoRxB53APZyOPWzHhKSv3cfHI0bVLBk.AqcYFPb46Yhvg4qT2grOy8xxRGwJy_LUS5KPNWyipS0&dib_tag=se&keywords=condicionador+shampoo+aq-01&qid=1781735509&sprefix=condicionador+shampoo+aq%2Caps%2C369&sr=8-5"
         },
         {
            id: v4(),
            name: "Seda Hidratação",
            lightDetails: "Desembaraçam e selam os fios",
            details: "Nada faz a gente se sentir melhor do que um cabelo macio, sedoso e com um brilho de arrasar, não é mesmo? Desenvolvido para transformar o seu dia a dia, o Condicionador Seda com Infusão Ativa penetra profundamente nos fios, garantindo uma hidratação intensa sem pesar.",
            price: 17.49,
            image: "/images/condicionador-seda.png",
            link: "https://www.amazon.com.br/Condicionador-Seda-Hidrata%C3%A7%C3%A3o-Ultradesembara%C3%A7o-Liberado/dp/B0BG31LH84/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DQXJWQ6B55LX&dib=eyJ2IjoiMSJ9.JV0K16xLtQ7EN4t47oyfN8js3gvYgQcMakjExLLuCtb-OOLVNs4PsNy1mmU_dVfk2Ef5WOtU6fJOMCgsJf-8wjD6DN0ZkI2-kd7WZ2u6OUDB2mYzwnjbntm9b8l_QMFjN6IvueYO7WoqMj7ZMr9ZzeuTcEQsN59Xd_8EuXIk0Zq_Mo7r2V6xkHHPRWrWRht3SDMoyhrw0N_w-L4VoKPeL2diWLGHJxFwr8rMJ4YpH7xkbhdxQLAerh83psl9eN1jzWL1f0QTUbQuwrPrMTIAhyLqLUEQMwr7hULCPPYQfbs.nF3ydszcIkL_y6mtby-ZVXK47XxXMCf7cF4zwmYJX3U&dib_tag=se&keywords=condicionador+condicionador+seda+hidrata%C3%A7%C3%A3o&qid=1781735599&sprefix=condicionador+condicionador+seda+hidrataco%2Caps%2C800&sr=8-5"
         },{
            id: v4(),
            name: "Óleo de Rícino",
            lightDetails: "Nutre cabelos e hidratar a pele",
            details: "Rico em ácido ricinoleico, vitamina E e ácidos graxos essenciais, o nosso Óleo de Rícino é extraído por prensagem a frio para preservar todos os seus nutrientes. É o aliado perfeito para a sua rotina de beleza inteligente, atuando desde o couro cabeludo até a ponta dos pés.",
            price: 17.90,
            image: "/images/oleo-de-ricino.png",
            link: "https://www.amazon.com.br/%C3%93leo-R%C3%ADcino-100-Puro-30ml/dp/B08XD891W7/ref=sr_1_10?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D7GRIJ1HSS56&dib=eyJ2IjoiMSJ9.YkpBsx6Pm83sqNeXa_O5fufBO85eRRhXnNrFuJ4hmPlPIrpX-cxblsM48Mgz17307-mg_hNYXgzJqVng3rYW9FC933hwnv5rynisENQ8a6rgjeE1keTXonaXmiTkaAzOb2FOpYs4Vevn_HCb1-BlzQAPFzC3uvzq-yoZj07c3sFisOy1CpLl_ghsRDfvg1D3MbcG2iqGEgWZUxUxcIii7KV9PBko0lFuld_lyZoIrvrrppX-Uz-6KGRszQJGBxxeYa7PYuXisRcgHS4h7S3a3j7dQMs8-TVFzGpDjFd4mgw.StsDFWwq-rXBDlu8QPYZ_E7bSjNQ8L81nvP3vTuCoQE&dib_tag=se&keywords=%C3%93leo+de+R%C3%ADcino&qid=1781735638&sprefix=%C3%B3leo+de+r%C3%ADcino%2Caps%2C996&sr=8-10"
         },
         {
            id: v4(),
            name: "Oil Sérum Facial",
            lightDetails: "Nutrição profunda",
            details: "O Oil Sérum Facial é um blend de óleos nobres de rápida absorção. Ele nutre profundamente, regenera a barreira cutânea e combate os radicais livres sem pesar. Desenvolvido para todos os tipos de pele, sela a hidratação, deixando o rosto com viço radiante, iluminado e toque aveludado.",
            price: 19.90,
            image: "/images/oil-serum-facial.png", 
            link: "https://www.amazon.com.br/S%C3%A9rum-Hidratante-Principia-%C3%81cidos-Hialur%C3%B4nicos/dp/B08N18SRNJ/ref=sr_1_13?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3M838XMEJN6WV&dib=eyJ2IjoiMSJ9.626yibtE1DNs-vGe8TjLLhuU6odn0l64uAGbuyFdxAZMKqZ5QkwQ0Fdm37_MoryRDGmSFFZAXvO9s6hSR5gWQeqhgpgDhP_E2Mt6oUz2rQbQx9qnfpMABR7emOX84HgJ9HP58kV9K2-UsYxQZbi8TgZWG2j4KQjayYklnaPWcjx4BjrLDj4Eu-kmgbynKajFWOxNprLjr6GuEVnQf7CnrKbY5CkWfTY4F461f9qDmJfxyomHLFXzOT8TGqfG5rGWXQGT7WFfHiQeOGvzMHH4_ox8fcSkMXq9PwRfyFPiOdk.0RHhsNuQ8yK1UGY_pbKo7xqy-fKuSNMjYHGY5Z3NwFs&dib_tag=se&keywords=oil+serum+facial&qid=1781735679&sprefix=oil+s%C3%A9rum+facial+%2Caps%2C772&sr=8-13"
         },
         {
            id: v4(),
            name: "Rolo de Gelo Facial",
            lightDetails: "Pele desinchada em segundos.",
            details: "O Rolo de Gelo Facial é a ferramenta perfeita para elevar sua rotina de skincare. Ele desincha o rosto instantaneamente, reduz a vermelhidão e minimiza os poros dilatados. Reutilizável e feito de silicone, basta preencher com água ou ingredientes naturais, congelar e massagear para obter uma pele radiante e tonificada.",
            price: 15.00,
            image: "/images/rolo-gelo-facial.png",
            link: "https://www.amazon.com.br/silicone-reutiliz%C3%A1vel-cuidados-encolhimento-antirrugas/dp/B0CSVN589B/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Z3BRS5MVA6AM&dib=eyJ2IjoiMSJ9.HvQORMgeBaOqb9PrEgtKrFrxXGah7tJQ7hSGaNMvk_q2Tdu1mxf5pRuS-3HR2LojSyryM16i8V8GkhlIfRPUoSXfBHOuMgQIe9mEW-O8KcWDM9N1JvqoA8143plr_UXQx7quzvw4FNnMN3d7O8zatj7c-67bhYCWyy0D2MKjHLeYSgqL7FYLIDqJFRHRsyX-jz-XYgmzb2SN2baERampm_P3Tma_Kcan0t-1aQTVeIxU-vl_FpYsMs2iCYLudi2bYFrAbCwABNGh_LkDwDlOKY7oz5W--xXe-l89c3YiXls.5xhE_nGWjONsSOVh75aITAUPbX4DAOQMiKkKHOobGyE&dib_tag=se&keywords=Rolo+de+Gelo+Facial&qid=1781735710&sprefix=oil+serum+facial%2Caps%2C863&sr=8-6"
         }
      ]
      
      res.status(200).json(produtos)
   }
   catch(erro) {
      console.log(`🚨 Erro ao buscar produtos: ${erro}`);
      res.status(500).json({ error: "Erro interno do servidor ao acessar o banco de dados." });
   }
});

app.get("/", (req, res) => {
   try{
      res.status(200).json({ message: "Bem vindo" })
   }
   catch(erro){
      console.log(`🚨 Erro em: ${erro}`)
   }
})

app.listen(PORT, () => {
   console.log(`🟢 API rodando em: http://localhost:${PORT}`)
})
