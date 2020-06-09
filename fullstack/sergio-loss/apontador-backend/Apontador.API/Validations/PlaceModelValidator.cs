using Apontador.API.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Apontador.API.Validations
{
    public class PlaceModelValidator : AbstractValidator<PlaceModel>
    {
        public PlaceModelValidator()
        {
            RuleFor(x => x.Name)
                .NotNull().WithMessage("'Nome' é um campo obrigatório.")
                .Length(1, 200).WithMessage("'Nome' deve conter entre {MinLength} e {MaxLength} caracteres.")
                .Must(BeValidText).WithMessage("'Nome' inválido");

            RuleFor(x => x.Phone)
                .NotNull().WithMessage("'Telefone' é um campo obrigatório")
                .Length(1, 20).WithMessage("'Telefone' deve conter entre {MinLength} e {MaxLength} caracteres.")
                .Must(BeValidPhoneNumber).WithMessage("'Telefone' inválido (Ex.: (##) ?####-####)");

            RuleFor(x => x.Address)
                .NotNull().WithMessage("'Endereço' é um campo obrigatório")
                .Length(1, 200).WithMessage("'Endereço' deve conter entre {MinLength} e {MaxLength} caracteres.")
                .Must(BeValidText).WithMessage("'Endereço' inválido");

        }

        public bool BeValidText(string arg)
        {
            if (arg != null)
            {
                Regex guidRegEx = new Regex(@"^[ -~A-zÀ-ÿ]*$");
                return guidRegEx.IsMatch(arg);
            }
            return false;
        }

        public bool BeValidPhoneNumber(string arg)
        {
            if (arg != null)
            {
                Regex guidRegEx = new Regex(@"((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}");
                return guidRegEx.IsMatch(arg);
            }
            return false;
        }

    }
}
