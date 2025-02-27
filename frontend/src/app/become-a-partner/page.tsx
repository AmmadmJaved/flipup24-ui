'use client';

import { useState } from 'react';
import { Mail, Lock, User, Phone, KeyRound } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CardContent } from '@/components/ui/CardContent';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const BecomePartner = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const formData = { firstName, lastName, email, phone, gender, password };
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <Card className="w-[400px] shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Become a Partner</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" />
              <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="pl-10" />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" />
              <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="pl-10" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="pl-10" />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-500" />
              <Input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="pl-10" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="pl-10" />
            </div>
            <div className="relative">
              <KeyRound className="absolute left-3 top-3 text-gray-500" />
              <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="pl-10" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="male" onChange={() => setGender('male')} />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="female" onChange={() => setGender('female')} />
                <span>Female</span>
              </label>
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BecomePartner;
