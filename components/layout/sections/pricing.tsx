import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  timer: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Desktop & All-in-One",
    popular: 0,
    timer: 6,
    description:
      "Especialistas em manutenção para desktops e computadores All-in-One, oferecendo reparos precisos e rápidos.",
    buttonText: "Saiba Mais",
    benefitList: [
      "Troca de peças e upgrades",
      "Limpeza interna e remoção de poeira",
      "Formatação e reinstalação de sistemas",
      "Diagnóstico avançado de hardware",
      "Atualização de drivers e software",
      "Soluções para travamentos e lentidão",
    ],
  },
  {
    title: "Celulares & Tablets",
    popular: 1,
    timer: 4,
    description:
      "Serviço especializado para celulares e tablets, garantindo reparos rápidos e peças originais.",
    buttonText: "Iniciar Serviço",
    benefitList: [
      "Troca de tela e touch",
      "Substituição de bateria e conectores",
      "Reparos em câmeras e botões",
      "Atualização de software",
      "Remoção de contas Google & AppleID",
      "Soluções para oxidação",
      "Reparos avançados em placas",
    ],
  },
  {
    title: "Notebooks & Ultrabooks",
    popular: 0,
    timer: 5,
    description:
      "Manutenção completa para notebooks e ultrabooks, garantindo alto desempenho e durabilidade.",
    buttonText: "Entre em Contato",
    benefitList: [
      "Troca de tela e teclado",
      "Soluções para aquecimento e travamento",
      "Upgrades de memória e armazenamento",
      "Reparos em conectores e dobradiças",
      "Formatação e recuperação de dados",
      "Limpeza interna e otimização",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-10 sm:py-14">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Equipamentos
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Nossos equipamentos mais reparados
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Alguns detalhes sobre os equipamentos que mais reparamos
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, timer, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">{timer}h</span>
                  <span className="text-muted-foreground text-sm"> /Tempo mínimo para reparo.</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
