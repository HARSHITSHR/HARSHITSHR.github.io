const Clients = () => {
  const clients = [
    "Aditya Birla",
    "Della Villas",
    "Food Link",
    "Hotel Ginger",
    "JP Infra",
    "Universal School",
    "Janam Diamond Factory",
    "Ornate Universal",
    "Shahid Kapoor",
    "Sunil Shetty",
    "Bramhan Seva Sangh",
  ];

  return (
    <section id="clients" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Clients</h2>
          <p className="text-lg text-muted-foreground">
            Happy to partner with leading names across sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card via-primary/20 to-accent/15 rounded-xl border border-primary/30 p-6 flex items-center justify-center text-center hover:shadow-lg hover:border-primary/60 hover:from-primary/25 hover:to-accent/20 transition-all duration-300"
            >
              <p className="text-sm font-medium text-foreground">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
