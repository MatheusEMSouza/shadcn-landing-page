import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Truck",
    title: "No conforto!",
    description:
      "Fazemos retidas e entregamos no conforto do seu lar, entregas e retiradas no mesmo dia.",
  },
  {
    icon: "LineChart",
    title: "Reparos Rápidos",
    description:
      "Temos diversos técnicos para cada tipo de reparo, garantindo a rapidez e qualidade do serviço.",
  },
  {
    icon: "Wallet",
    title: "Atendimento 24h",
    description:
      "Uma das poucas empresas que oferece atendimento 24h, para qualquer tipo de emergência.",
  },
  {
    icon: "DollarSign",
    title: "Test Marketing Ideas",
    description:
      "Melhor preco da regiao com qualidade acima da media, garantimos o melhor custo beneficio.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-10 sm:py-14">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mao de Obra 100% Especializada!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Temos mais de 18 anos de experiência em manutenção de desktops, notebooks, celulares e outros.
            <br />
            Ja enfretamos todos tipos de problemas e hoje nossa especiaidade e entregar o melhor serviço para nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
