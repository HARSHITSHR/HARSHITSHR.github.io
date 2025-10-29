const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">RVD Design MEPF</h4>
            <p className="text-background/80">
              Design & Project Management Consultancy – Excellence since 2017
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-background/80">
              &copy; 2017-{new Date().getFullYear()} RVD Design MEPF. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
