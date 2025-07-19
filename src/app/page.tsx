import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Clock,
  Award,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-900 to-violet-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Universal Security Services
              </h1>
              <h2 className="text-4xl">24/7 Professional Security Guard Services</h2>
              <p className="text-xl text-violet-100">
                Trained, Licensed, and Trusted Guards at Your Service
              </p>
              <p className="text-lg text-violet-200">
                Serving since 2012 with excellence and integrity
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Book a Security Service Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-violet-900 bg-transparent"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Professional Security Guard"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Company Profile
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Universal Security Services - A trusted name in security services
              since 2012
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Universal Security Services Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                About Universal Security Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are glad to introduce ourselves as a Reputed and Exceptional
                Security Agency since year 2012. We have trained management team
                with a well versed team to handle all facets of Safety, Security
                & Intelligence services, with vast experience in the field,
                which needs dedicated & highly motivated individuals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The loyalty and integrity best suited for large commercial
                establishments, corporate offices, commercial establishments,
                residential towers as well as properties. Besides, a well
                organized Regional Office at Varanasi, we have Branch offices at
                various locations to manage, cover proper control over our
                security Staff and to provide better services to our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">12+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">
                    1500+
                  </div>
                  <div className="text-sm text-gray-600">
                    Security Personnel
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Policy */}
          <div className="bg-violet-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Quality Policy
            </h3>
            <p className="text-gray-700 text-center italic leading-relaxed max-w-4xl mx-auto">
              "We strive to provide quality security services to clients with
              implied and futuristic needs. The management and Security
              Personnel are committed to secure long term relationship with our
              clients. We repute doing this by involving all employees at all
              levels and constant quality & services improvement."
            </p>
          </div>

          {/* Company Norms and Policies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Company Norms and Policies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-violet-100">
                <CardHeader>
                  <Shield className="h-8 w-8 text-violet-600 mb-2" />
                  <CardTitle className="text-lg">Client Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Meet specific requirements of clients staff and property
                    protection, physical protection from theft and damage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-violet-100">
                <CardHeader>
                  <Award className="h-8 w-8 text-violet-600 mb-2" />
                  <CardTitle className="text-lg">Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Manage risk by preventing, planning and organizing the
                    unforeseen situations and provide emergency protection.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-violet-100">
                <CardHeader>
                  <Users className="h-8 w-8 text-violet-600 mb-2" />
                  <CardTitle className="text-lg">Quality Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Provide training to security personnel with reformed norms
                    and sound system of security training requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-violet-100">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-violet-600 mb-2" />
                  <CardTitle className="text-lg">Security Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Conduct security audit to pinpoint risk and threat and
                    provide disaster control documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-violet-100">
                <CardHeader>
                  <FileText className="h-8 w-8 text-violet-600 mb-2" />
                  <CardTitle className="text-lg">Quality Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Extend commitment of quality standard with support of rules,
                    regulations and quality documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-violet-100">
                <CardHeader>
                  <Clock className="h-8 w-8 text-violet-600 mb-2" />
                  <CardTitle className="text-lg">Policy Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Monitor recent developments in security field like terrorism
                    and bomb threats, updating company policies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional security solutions tailored for every sector and
              requirement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-violet-100 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl">Corporate Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Protection of corporate buildings</li>
                  <li>• Providing security integrated services</li>
                  <li>• Monitoring high rise buildings</li>
                  <li>• Handling sophisticated alarm systems</li>
                </ul>
              </CardContent>
            </Card>

            {/* Building Management */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-violet-100 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl">
                  Building Management Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Total security solution of buildings</li>
                  <li>• Fire prevention systems</li>
                  <li>• Water leaks, air conditioning checks</li>
                  <li>• Generator operation & alarm monitoring</li>
                </ul>
              </CardContent>
            </Card>

            {/* Industrial Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-violet-100 p-3 rounded-full w-fit">
                  <Clock className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl">Industrial Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gate control & access management</li>
                  <li>• Incoming/outgoing material monitoring</li>
                  <li>• Managing factory workers</li>
                  <li>• Fire control & transport control</li>
                </ul>
              </CardContent>
            </Card>

            {/* Bank & ATM Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-violet-100 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl">Bank & ATM Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Controlling banking discipline</li>
                  <li>• Cash & transaction safety</li>
                  <li>• Risk and threat assessment</li>
                  <li>• ATM security monitoring</li>
                </ul>
              </CardContent>
            </Card>

            {/* Electronic Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-violet-100 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl">Electronic Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Electronic security system induction</li>
                  <li>• Equipment maintenance services</li>
                  <li>• Automatic electronic control setup</li>
                  <li>• Computer & electronic support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Residential Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-violet-100 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-xl">
                  Residential Complex & Society
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Protection of residential buildings</li>
                  <li>• Gate open/close systems</li>
                  <li>• Visitor guidance & control</li>
                  <li>• Protection of families and kids</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training & Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Training & Instructions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our training pattern is regulated by Private Security Agencies
              Regulation Act
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comprehensive Training Program
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Physical fitness training
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Physical security of building, society, household
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Fire fighting techniques
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Crowd control management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Correct wearing of uniform and conduct in public
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    First Aid & panic control
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Identification of identity cards, passport and smart cards
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    English language for document identification
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Identification of explosive devices
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Crisis response and disaster management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Rudimentary knowledge of Indian Penal Code
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Identification of badges and ranks of Police, Para Military
                    and Armed Forces
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Security Training"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Compliance & Regulations */}
          <div className="bg-violet-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Regulatory Compliance
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Private Security Regulation Act 2005
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Payment of Wages Act 1936
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Industrial Dispute Act 1947
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Minimum Wages Act 1948
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Employees Provident Fund Act 1952
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Payment of Bonus Act 1965
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  Control of Labour Act 1970
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-sm font-semibold text-violet-600">
                  ESIC Act 1948
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Competitive Rates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional security services at competitive rates with
              transparent pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Security Guard</CardTitle>
                <p className="text-sm text-gray-600">8 Hours Duty</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  ₹11,000
                </div>
                <p className="text-gray-600 mb-4">Per Month</p>
                <p className="text-xs text-gray-500">
                  + 10% Service Charge + GST @18%
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Security Guard</CardTitle>
                <p className="text-sm text-gray-600">12 Hours Duty</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  ₹16,500
                </div>
                <p className="text-gray-600 mb-4">Per Month</p>
                <p className="text-xs text-gray-500">
                  + 10% Service Charge + GST @18%
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Housekeeping</CardTitle>
                <p className="text-sm text-gray-600">8 Hours Duty</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  ₹10,000
                </div>
                <p className="text-gray-600 mb-4">Per Month</p>
                <p className="text-xs text-gray-500">
                  + 10% Service Charge + GST @18%
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-12 bg-white rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Terms and Conditions
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="font-semibold mb-2">Contract Period</div>
                <p>
                  The contract will be undertaken for a period of minimum one
                  year and the same will be extended based on mutual
                  understanding.
                </p>
              </div>
              <div className="text-center">
                <div className="font-semibold mb-2">Termination Notice</div>
                <p>
                  If the termination of contract is prior to the period as
                  agreed upon, then one month notice by either party shall be
                  given.
                </p>
              </div>
              <div className="text-center">
                <div className="font-semibold mb-2">Lead Time</div>
                <p>
                  Minimum one week lead time is required to provide the security
                  personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Universal Security Services operates across major cities in India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-violet-100 p-4 rounded-full">
                    <MapPin className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Varanasi (Head Office)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">Regional Office</p>
                  <p className="text-gray-600">Main Operations Center</p>
                  <Badge className="bg-violet-100 text-violet-800">
                    Headquarters
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-violet-100 p-4 rounded-full">
                    <MapPin className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Delhi NCR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">Branch Office</p>
                  <p className="text-gray-600">Northern Region</p>
                  <Badge className="bg-violet-100 text-violet-800">
                    Operational
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-violet-100 p-4 rounded-full">
                    <MapPin className="h-8 w-8 text-violet-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Multiple Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">Branch Offices</p>
                  <p className="text-gray-600">Pan India Coverage</p>
                  <Badge className="bg-violet-100 text-violet-800">
                    Expanding
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  Universal Security Services has been protecting our office
                  for 2 years. Their guards are professional and highly
                  trained.
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Priya Sharma"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Priya Sharma
                    </h4>
                    <p className="text-sm text-gray-600">Facility Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  Excellent service! The guards are courteous and vigilant. Our
                  society has seen significant improvement.
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Rajesh Kumar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Rajesh Kumar
                    </h4>
                    <p className="text-sm text-gray-600">Society President</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  Professional and reliable security services. Their team
                  handles crowd management perfectly.
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Anita Desai"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Anita Desai</h4>
                    <p className="text-sm text-gray-600">Event Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Vacancies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600">
              Join our team of professional security guards
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Night Shift Security Guard
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Delhi</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <strong>Shift:</strong> 10 PM - 6 AM
                  </p>
                  <p className="text-gray-600">
                    <strong>Salary:</strong> ₹18,000 - ₹22,000
                  </p>
                </div>
                <Link href="/apply">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Female Security Guard
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Bangalore</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Open</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <strong>Shift:</strong> Day Shift
                  </p>
                  <p className="text-gray-600">
                    <strong>Salary:</strong> ₹16,000 - ₹20,000
                  </p>
                </div>
                <Link href="/apply">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/vacancies">
              <Button variant="outline" size="lg">
                View All Vacancies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact Universal Security Services
            </h2>
            <p className="text-lg text-gray-600">
              Ready to secure your premises? Contact us today!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+91 9140356560</p>
                <p className="text-sm text-gray-600">+91 6393112413</p>
                <p className="text-gray-600">24/7 Support Available</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="font-medium text-violet-600">Contact Person:</p>
                  <p className="text-gray-700">
                    Satyendra Kumar Singh (Proprietor)
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: +91 9140356560, +91 6393112413
                  </p>
                  <p className="text-sm text-gray-600">
                    Email: ussforce15@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">ussforce15@gmail.com</p>
                <p className="text-gray-600">Quick Response Guaranteed</p>
                <p className="text-sm text-gray-500 mt-2">
                  GST: 09FBVPS7065C2ZV
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Head Office</p>
                <p className="text-gray-600">6/41, K-9, Kathvatiya</p>
                <p className="text-gray-600">Shivpur, Varanasi - 221003</p>
                <p className="text-sm text-violet-600 mt-2">
                  Universal Security Services
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
