"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useEffect } from "react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "LocateFixed",
    title: "Manutenção Corretiva",
    description:
      "Correções rápidas e eficientes para notebooks, celulares e tablets, incluindo troca de componentes, atualização de software e reparos avançados.",
  },
  {
    icon: "Activity",
    title: "Manutenção Preventiva",
    description:
      "Planos mensais com limpeza, atualizações, checagem de componentes e melhorias para prolongar a vida útil dos dispositivos.",
  },
  {
    icon: "Building2",
    title: "Serviços Empresariais",
    description:
      "Soluções personalizadas para empresas, com suporte técnico, manutenção em lote, contratos de assistência e consultoria para otimização e segurança.",
  },
  {
    icon: "Truck",
    title: "Coleta e Entrega sem Custo",
    description:
      "Não precisa sair de casa ou do trabalho. A gente busca e entrega seus dispositivos sem cobrar nada, garantindo comodidade e economia de tempo.",
  },
  {
    icon: "FlaskConical",
    title: "Laboratório Próprio",
    description:
      "Nosso laboratório é equipado com tecnologia moderna, garantindo diagnósticos precisos e reparos rápidos.",
  },
  {
    icon: "Rabbit",
    title: "Orçamento em 12h",
    description:
      "Aqui não tem surpresa! Você pede um orçamento, a gente explica tudo direitinho e só começa o reparo depois de você aprovar.",
  },
  {
    icon: "CalendarClock",
    title: "20 Anos de Experiência",
    description:
      "São duas décadas de história, acumulando conhecimento e construindo uma relação de confiança com nossos clientes.",
  },
  {
    icon: "Lock",
    title: "Garantia de ate 12 Meses",
    description:
      "Qualquer reparo que a gente fizer tem 1 ano de garantia. Se o problema voltar, consertamos sem custo.",
  },
  {
    icon: "ShieldCheck",
    title: "Reparo e Entrega em até 7 Dias Úteis",
    description:
      "Sabemos que seus dispositivos são importantes. Consertamos e devolvemos rapidinho, confira nossos planos.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Faturamento Flexível",
    description:
      "A gente facilita o pagamento com opções que se adaptam às necessidades de empresas e clientes.",
  },
  {
    icon: "Cable",
    title: "Logística Reversa",
    description:
      "Seus equipamentos antigos ou peças defeituosas? A gente recolhe e recicla, ajudando o meio ambiente.",
  },
  {
    icon: "ShoppingBasket",
    title: "Atendimento EMPRESAS",
    description:
      "Temos experiência com empresas e garantimos soluções ágeis e personalizadas para manter tudo funcionando.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="container py-10 sm:py-14"
    >
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        QUALIDADES
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Fazemos a diferença!
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Desde o primeiro contato até a entrega, tudo é feito com cuidado e
        respeito. Seu dispositivo está em boas mãos.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
