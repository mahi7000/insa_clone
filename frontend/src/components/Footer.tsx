import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  CircleUser,
  Facebook,
  Youtube,
  Linkedin,
  Send,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full justify-between">
          {/* INSA Section */}
          <section className="space-y-4">
            <h2 className="text-2xl text-left font-bold">INSA</h2>
            <p className="text-gray-300 text-left">
              The Information Network Security Administration (INSA) was
              established for the first time in 1999 in accordance with Council
              of Ministers Regulation No. 130/1999 with the aim of protecting
              our country's information and information infrastructure from
              harm.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4">
            <h2 className="text-2xl text-left font-bold">FAQ</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 hover:text-white transition">
                <a
                  href="https://insa.gov.et/web/en/what-is-cyber-"
                  className="flex items-center"
                >
                  {" "}
                  <ChevronRight className="w-4 h-4 mr-2" />
                  What is a cyber environment?
                </a>
              </li>
              <li className="flex items-center text-gray-300 hover:text-white transition">
                <a
                  href="https://insa.gov.et/web/en/cyber-security1"
                  className="flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Cyber/Information Security{" "}
                </a>
              </li>
              <li className="flex items-center text-gray-300 hover:text-white transition">
                <a
                  href="https://insa.gov.et/web/en/cyber-attack"
                  className="flex items-center"
                >
                  {" "}
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Cyber attack{" "}
                </a>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="space-y-4">
            <h2 className="text-2xl text-left font-bold">Contact</h2>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                +251-113-71-71-14
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                contact@insa.gov.et
              </li>
              <li className="flex items-center text-gray-300">
                <CircleUser className="w-5 h-5 mr-2 flex-shrink-0" />
                www.insa.gov.et
              </li>
            </ul>
          </section>
        </div>

        {/* Social Media Links */}
        <div className=" text-gray-200 flex justify-center space-x-6">
          <a
            href="https://web.facebook.com/INSA.ETHIOPIA?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@cyberigna1003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/insagovet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition"
          >
            <Send className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
